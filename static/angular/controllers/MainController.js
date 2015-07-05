

app.controller('MainController', ['$scope', function($scope) {
  $scope.oldtestaments = [
    {
      number: '2.',
      title: '“The souls of the just are in the hands of God.” (long and short)',
      pdf: 'OT_2_Wisdom_3.pdf',
      reference: 'Wis 3:1-6, 9'
    },
    {
      number: '3.',
      title: '“ A blameless life is a ripe old age.”',
      pdf: 'OT_3_Wisdom_4.pdf',
      reference: 'Wis 4:7-15'
    },
    {
      number: '4.',
      title: '“The Lord will destroy death forever.”',
      pdf: 'OT_4_Isaiah_25.pdf',
      reference: 'Is 25:6, 7-9'
    },
    {
      number: '5.',
      title: '“It is good to wait in silence for the Lord God to save.”',
      pdf: 'OT_5_Lamentations.pdf',
      reference: 'Lam 3:17-26'
    },
    {
      number: '34.',
      title: '“I will open your graves my people.”',
      pdf: 'OT_34_Ezekiel.pdf',
      reference: 'Ez 37:12-14'
    },
    {
      number: '158.',
      title: '“A worthy wife is to be praised.”',
      pdf: 'OT_158_Proverbs.pdf',
      reference: 'Prv 31:10-31'
    },
    {
      number: '173.',
      title: '“I will watch over my sheep.” ',
      pdf: 'OT_173_Ezekiel.pdf',
      reference: ' Ez 34:11-16'
    },
    {
      number: '245.',
      title: '“No longer will there be weeping or mourning.”',
      pdf: 'OT_245_Isaiah.pdf',
      reference: 'Is 65:17-21'
    },
    {
      number: '453.',
      title: '“To everything there is a season.” ',
      pdf: 'OT_453_Ecclesiastes.pdf',
      reference: 'Eccl 3:1-11'
    },
    {
      number: '821.',
      title: '“Fear not, I am with you.”',
      pdf: 'OT_821_Isaiah_41.pdf',
      reference: 'Is 41:8-10, 13'
    }
  ];
  
   
  $scope.oldeastertestaments = [
    {
      number: '1012-1.',
      title: '“He is the one appointed by God as judge”',
      pdf: 'NT_Easter_1012_1_Acts.pdf',
      reference: 'Acts 10:34-36, 42-43'
    },
    {
      number: '1012-2.',
      title: '“Blessed are the dead who die in the Lord.”',
      pdf: 'NT_Easter_1012_2_Rev_14.pdf',
      reference: 'Rev 14:13'
    },
    {
      number: '1012-3.',
      title: '“The dead were judged according to their deeds.”',
      pdf: 'NT_Easter_1012_3_Rev_20.pdf',
      reference: 'Rev 20:11-21:1'
    },
    {
      number: '1012-4.',
      title: '“I, John saw a new heaven and a new earth.”',
      pdf: 'NT_Easter_1012-4_Rev_21.pdf',
      reference: 'Rev 21:1-5a, 6b-7'
    }
  ];
   
       
  $scope.newtestaments = [
    {
      number: '2.',
      title: '“Hope does not disappoint.”',
      pdf: 'NT_2_Romans_5.pdf',
      reference: 'Rom 5:5-11'
    },
    {
      number: '4.',
      title: '“Let us walk in newness of life. (long and short versions)',
      pdf: 'NT_4_Romans_6.pdf',
      reference: 'Rom 6:3-9'
    },
    {
      number: '6.',
      title: '“Who can ever come between us and the love of Christ?',
      pdf: 'NT_6_Romans_8.pdf',
      reference: 'Rom 8:31-35, 37-39'
    },
    {
      number: '7.',
      title: '“Whether alive or dead, we belong to the Lord.”',
      pdf: 'NT_7_Romans_14.pdf',
      reference: 'Rom 14:7-9. 10c-12'
    },
    {
      number: '10.',
      title: '“What is seen is transitory; what is unseen I eternal.”',
      pdf: 'NT_10_2Cor_4.pdf',
      reference: '2Cor 4:14-5:1'
    },
    {
      number: '11.',
      title: '“We have an everlasting home in heaven.”',
      pdf: 'NT_11_2Cor_5.pdf',
      reference: '2Cor 5:1, 6-10'
    },
    {
      number: '13.',
      title: '“We shall stay with the Lord forever.”',
      pdf: 'NT_13_1Thess_4.pdf',
      reference: '1Thes 4:13-18'
    },
    {
      number: '19.',
      title: '“He will wipe every tear from their eyes.”',
      pdf: 'NT_19_Rev_21.pdf',
      reference: 'Rev 21:1-5a, 6b-7'
    },
    {
      number: '44.',
      title: '“We are given new birth into everlasting life.”',
      pdf: 'NT_44_1Pet_1.pdf',
      reference: '1Pt 1:3-9'
    },
    {
      number: '489.',
      title: '“Rejoice in the Lord always.”',
      pdf: 'NT_489_Phil.pdf',
      reference: 'Phil 4:4-9'
    },
    {
      number: '591.',
      title: '“I have fought the fight and finished the race.”',
      pdf: 'NT_591_2Tim.pdf',
      reference: '2Tim 4:6-8'
    }
  ]; 
   
       
  $scope.psalms = [
    {
      number: '1',
      title: 'Lord, you have the words of everlasting life.',
      pdf: 'Psalm_19.pdf',
      reference: '19'
    },
    {
      number: '2',
      title: 'The Lord is my Shepherd.',
      pdf: 'Psalm_23.pdf',
      reference: '23'
    },
    {
      number: '3',
      title: 'To you, O Lord, I lift my soul.',
      pdf: 'Psalm_25.pdf',
      reference: '25'
    },
    {
      number: '4',
      title: 'The Lord is my light and my salvation.',
      pdf: 'Psalm_27.pdf',
      reference: '27'
    },
    {
      number: '5',
      title: 'My soul is thirsting for the living God: when shall I see him face to face?',
      pdf: 'Psalm_42.pdf',
      reference: '42'
    },
    {
      number: '6',
      title: 'My soul is thirsting for you, O Lord my God.',
      pdf: 'Psalm_63.pdf',
      reference: '63'
    },
    {
      number: '7',
      title: 'The Lord is kind and merciful.',
      pdf: 'Psalm_103.pdf',
      reference: '103'
    },
    {
      number: '8',
      title: 'I will walk in the presence of the Lord in the land of the living.',
      pdf: 'Psalm_116.pdf',
      reference: '116'
    },
    {
      number: '9',
      title: 'I rejoiced when I heard them say: let us go to the house of the Lord.',
      pdf: 'Psalm_122.pdf',
      reference: '122'
    },
    {
      number: '10',
      title: 'Out of the depths, I cry to you, Lord.',
      pdf: 'Psalm_130.pdf',
      reference: '130'
    },
    {
      number: '11',
      title: 'O Lord, hear my prayer.',
      pdf: 'Psalm_143.pdf',
      reference: '143'
    },
    {
      number: '12',
      title: 'I will praise your name forever, my king and my God.',
      pdf: 'Psalm_145.pdf',
      reference: '145'
    }
  ]; 
      
      
  
  /*$scope.shutterbugg = {
    icon: 'img/shutterbugg.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'img/gameboard.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  };

  $scope.forecast = {
    icon: 'img/forecast.jpg',
    title: 'Forecast',
    developer: 'Forecast',
    price: 1.99
  };*/
}]);