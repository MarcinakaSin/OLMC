package OLMC

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"html/template"
	"time"
	"strings"
	
	"appengine"
	"appengine/blobstore"
	"appengine/datastore"
	"appengine/mail"
)

type BulletinRecord struct {
	Name    			string
	Date    			time.Time
	Thumbnail1xKey	string
	Thumbnail2xKey	string
	DataKey			string
}

type BulletinRecordWithIdentifier struct {
	Name    			string
	Date    			time.Time
	Thumbnail1xKey	string
	Thumbnail2xKey	string
	DataKey			string
	Identifier		string
}

func withIdentifiers(record[] BulletinRecord) [] BulletinRecordWithIdentifier {
	n := len(record)
	records := make([]BulletinRecordWithIdentifier, n)
	
	for i := 0; i < n; i++ {
		records[i] = BulletinRecordWithIdentifier{record[i].Name, record[i].Date, record[i].Thumbnail1xKey, record[i].Thumbnail2xKey, record[i].DataKey, strings.Replace(record[i].Name, " ", "", -1)}
	}
	
	return records
}

func init() {
	http.HandleFunc("/", rootHandler)
	http.HandleFunc("/contactRequest", contactRequestHandler)
	http.HandleFunc("/uploadBlob", uploadBlob)
	http.HandleFunc("/addBulletin", addBulletin)
	http.HandleFunc("/bulletin", bulletinHandler)
	http.HandleFunc("/serve", serveHandler)
}

// /

func rootHandler(w http.ResponseWriter, r *http.Request) {
	context := appengine.NewContext(r)
	bulletinQuery := datastore.NewQuery("BulletinRecord").Order("-Date").Limit(1)
	bulletins := make([]BulletinRecord, 0, 1)
    
	if _, error := bulletinQuery.GetAll(context, &bulletins); error != nil {
		http.Error(w, error.Error(), http.StatusInternalServerError)
		return
	}
	
	template, _ := template.ParseFiles("static/templates/index.html")
	template.Execute(w, withIdentifiers(bulletins)[0])
}

// /contactRequest

func contactRequestHandler(w http.ResponseWriter, r *http.Request) {
	name := r.FormValue("name")
	email := r.FormValue("email")
	subject := r.FormValue("subject")
	message := r.FormValue("message")
	
	if len(email) == 0 {
		fmt.Fprint(w, "invalid request")
		return
	}
	
	context := appengine.NewContext(r)
	
	mailMessage := &mail.Message{
			Sender:  name + " <support@olmc-web2.appspotmail.com>",
			ReplyTo: email,
			To:      []string{"andbart@msn.com"},
			Subject: subject,
			Body:    message,
	}
	
	if error := mail.Send(context, mailMessage); error != nil {
		context.Errorf("the email could not be sent: %v", error)
	}
	
	http.ServeFile(w, r, "static/html/contact/contact_sent.html")
}

type UploadBlobResponse struct {
	Key string
}

func uploadBlob(w http.ResponseWriter, r *http.Request) {
	bodyData, error := ioutil.ReadAll(r.Body)
	fileType := r.URL.Query()["type"][0]
	
	var mimeType string
	
	if fileType == "png" {
		mimeType = "image/png"
	} else {
		mimeType = "application/pdf"
	}
	
	context := appengine.NewContext(r)
    
	writer, error := blobstore.Create(context, mimeType)
	if error != nil {
		return
	}
	
	_, error = writer.Write(bodyData)
	if error != nil {
		return
	}
	
	error = writer.Close()
	if error != nil {
		return
	}
	
    var k appengine.BlobKey
	k, _ = writer.Key()
	
	encoder := json.NewEncoder(w)
	encoder.Encode(&UploadBlobResponse{ Key: string(k) })
}

func addBulletin(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query()["name"][0]
	t1k := r.URL.Query()["t1k"][0]
	t2k := r.URL.Query()["t2k"][0]
	dk := r.URL.Query()["dk"][0]
	
	record := BulletinRecord{
		Name: name,
		Date: time.Now(),
		Thumbnail1xKey: t1k,
		Thumbnail2xKey: t2k,
		DataKey: dk,
	}
	
	context := appengine.NewContext(r)
	datastore.Put(context, datastore.NewKey(context, "BulletinRecord", record.Name, 0, nil), &record)
	
	fmt.Fprint(w, "Done")
}

func bulletinHandler(w http.ResponseWriter, r *http.Request) {
	context := appengine.NewContext(r)
	query := datastore.NewQuery("BulletinRecord").Order("-Date").Limit(4)
	bulletins := make([]BulletinRecord, 0, 4)
    
	if _, error := query.GetAll(context, &bulletins); error != nil {
		http.Error(w, error.Error(), http.StatusInternalServerError)
		return
	}
    
	template, _ := template.ParseFiles("static/templates/bulletin.html")
	template.Execute(w, withIdentifiers(bulletins))
}

func serveHandler(w http.ResponseWriter, r *http.Request) {
	blobstore.Send(w, appengine.BlobKey(r.URL.Query()["key"][0]))
}
