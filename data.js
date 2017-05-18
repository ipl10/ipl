var users = [
    {
      name: 'Arcot',
      paid: 500,
      key: 'arcot'
    },
    {
      name: 'Bugga',
      paid: 0,
      key: 'bugga'
    },
    {
      name: 'Harsh',
      paid: 0,
      key: 'harsh'
    },
    {
      name: 'Khushboo',
      paid: 350,
      key: 'khushboo'
    },
    {
      name: 'Lakku',
      paid: 500,
      key: 'lakku'
    },
    {
      name: 'Raghu',
      paid: 0,
      key: 'raghu'
    },
    {
      name: 'Ramesh',
      paid: 0,
      key: 'ramesh'
    },
    {
      name: 'Sai',
      paid: 0,
      key: 'sai'
    },
    {
      name: 'Siva',
      paid: 200,
      key: 'siva'
    }
  ]

var data = [
  {
    "match": [
      "SRH",
      "RCB"
    ],
    "location": "Hyderabad",
    "date": "04-05-2017",
    "time": "8:00PM",
    "result": "SRH",
    "users": [
      {
        "name": "arcot",
        "team": "RCB"
      },
      {
        "name": "bugga",
        "team": "SRH"
      },
      {
        "name": "harsh",
        "team": "SRH"
      },
      {
        "name": "khushboo",
        "team": "RCB"
      },
      {
        "name": "lakku",
        "team": "SRH"
      },
      {
        "name": "raghu",
        "team": "SRH"
      },
      {
        "name": "ramesh",
        "team": "RCB"
      },
      {
        "name": "sai",
        "team": "RCB"
      },
      {
        "name": "siva",
        "team": "SRH"
      }
    ]
  },
  {
    "match": [
      "RPS",
      "MI"
    ],
    "location": "Pune",
    "date": "04-06-2017",
    "time": "8:00PM",
    "result": "RPS",
    "users": [
      {
        "name": "arcot",
        "team": "RPS"
      },
      {
        "name": "bugga",
        "team": "MI"
      },
      {
        "name": "harsh",
        "team": "MI"
      },
      {
        "name": "khushboo",
        "team": "RPS"
      },
      {
        "name": "lakku",
        "team": "MI"
      },
      {
        "name": "raghu",
        "team": "RPS"
      },
      {
        "name": "ramesh",
        "team": "MI"
      },
      {
        "name": "sai",
        "team": "MI"
      },
      {
        "name": "siva",
        "team": "RPS"
      }
    ]
  },
  {
    "match": [
      "GL",
      "KKR"
    ],
    "location": "Rajkot",
    "date": "04-07-2017",
    "time": "8:00PM",
    "result": "KKR",
    "users": [
      {
        "name": "arcot",
        "team": "GL"
      },
      {
        "name": "bugga",
        "team": "GL"
      },
      {
        "name": "harsh",
        "team": "GL"
      },
      {
        "name": "khushboo",
        "team": "GL"
      },
      {
        "name": "lakku",
        "team": "GL"
      },
      {
        "name": "raghu",
        "team": "KKR"
      },
      {
        "name": "ramesh",
        "team": "GL"
      },
      {
        "name": "sai",
        "team": "KKR"
      },
      {
        "name": "siva",
        "team": "GL"
      }
    ]
  },
  {
    "match": [
      "KXIP",
      "RPS"
    ],
    "location": "Indore",
    "date": "04-08-2017",
    "time": "4:00PM",
    "result": "KXIP",
    "users": [
      {
        "name": "arcot",
        "team": "KXIP"
      },
      {
        "name": "bugga",
        "team": "RPS"
      },
      {
        "name": "harsh",
        "team": "X"
      },
      {
        "name": "khushboo",
        "team": "RPS"
      },
      {
        "name": "lakku",
        "team": "RPS"
      },
      {
        "name": "raghu",
        "team": "RPS"
      },
      {
        "name": "ramesh",
        "team": "RPS"
      },
      {
        "name": "sai",
        "team": "RPS"
      },
      {
        "name": "siva",
        "team": "RPS"
      }
    ]
  },
  {
    "match": [
      "RCB",
      "DD"
    ],
    "location": "Bengaluru",
    "date": "04-09-2017",
    "time": "8:00PM",
    "result": "RCB",
    "users": [
      {
        "name": "arcot",
        "team": "RCB"
      },
      {
        "name": "bugga",
        "team": "RCB"
      },
      {
        "name": "harsh",
        "team": "X"
      },
      {
        "name": "khushboo",
        "team": "RCB"
      },
      {
        "name": "lakku",
        "team": "DD"
      },
      {
        "name": "raghu",
        "team": "RCB"
      },
      {
        "name": "ramesh",
        "team": "RCB"
      },
      {
        "name": "sai",
        "team": "DD"
      },
      {
        "name": "siva",
        "team": "RCB"
      }
    ]
  },
  {
    "match": [
      "SRH",
      "GL"
    ],
    "location": "Hyderabad",
    "date": "04-09-2017",
    "time": "4:00PM",
    "result": "SRH",
    "users": [
      {
        "name": "arcot",
        "team": "GL"
      },
      {
        "name": "bugga",
        "team": "GL"
      },
      {
        "name": "harsh",
        "team": "SRH"
      },
      {
        "name": "khushboo",
        "team": "SRH"
      },
      {
        "name": "lakku",
        "team": "SRH"
      },
      {
        "name": "raghu",
        "team": "SRH"
      },
      {
        "name": "ramesh",
        "team": "SRH"
      },
      {
        "name": "sai",
        "team": "SRH"
      },
      {
        "name": "siva",
        "team": "SRH"
      }
    ]
  },
  {
    "match": [
      "MI",
      "KKR"
    ],
    "location": "Mumbai",
    "date": "04-09-2017",
    "time": "8:00PM",
    "result": "MI",
    "users": [
      {
        "name": "arcot",
        "team": "MI"
      },
      {
        "name": "bugga",
        "team": "MI"
      },
      {
        "name": "harsh",
        "team": "X"
      },
      {
        "name": "khushboo",
        "team": "MI"
      },
      {
        "name": "lakku",
        "team": "KKR"
      },
      {
        "name": "raghu",
        "team": "MI"
      },
      {
        "name": "ramesh",
        "team": "MI"
      },
      {
        "name": "sai",
        "team": "KKR"
      },
      {
        "name": "siva",
        "team": "MI"
      }
    ]
  },
  {
    "match": [
      "KXIP",
      "RCB"
    ],
    "location": "Indore",
    "date": "04-10-2017",
    "time": "8:00PM",
    "result": "KXIP",
    "users": [
      {
        "name": "arcot",
        "team": "KXIP"
      },
      {
        "name": "bugga",
        "team": "KXIP"
      },
      {
        "name": "harsh",
        "team": "RCB"
      },
      {
        "name": "khushboo",
        "team": "RCB"
      },
      {
        "name": "lakku",
        "team": "KXIP"
      },
      {
        "name": "raghu",
        "team": "RCB"
      },
      {
        "name": "ramesh",
        "team": "RCB"
      },
      {
        "name": "sai",
        "team": "X"
      },
      {
        "name": "siva",
        "team": "KXIP"
      }
    ]
  },
  {
    "match": [
      "RPS",
      "DD"
    ],
    "location": "Pune",
    "date": "04-11-2017",
    "time": "8:00PM",
    "result": "DD",
    "users": [
      {
        "name": "arcot",
        "team": "DD"
      },
      {
        "name": "bugga",
        "team": "RPS"
      },
      {
        "name": "harsh",
        "team": "X"
      },
      {
        "name": "khushboo",
        "team": "RPS"
      },
      {
        "name": "lakku",
        "team": "DD"
      },
      {
        "name": "raghu",
        "team": "X"
      },
      {
        "name": "ramesh",
        "team": "DD"
      },
      {
        "name": "sai",
        "team": "X"
      },
      {
        "name": "siva",
        "team": "RPS"
      }
    ]
  },
  {
    "match": [
      "MI",
      "SRH"
    ],
    "location": "Mumbai",
    "date": "04-12-2017",
    "time": "8:00PM",
    "result": "MI",
    "users": [
      {
        "name": "arcot",
        "team": "SRH"
      },
      {
        "name": "bugga",
        "team": "MI"
      },
      {
        "name": "harsh",
        "team": "SRH"
      },
      {
        "name": "khushboo",
        "team": "X"
      },
      {
        "name": "lakku",
        "team": "SRH"
      },
      {
        "name": "raghu",
        "team": "SRH"
      },
      {
        "name": "ramesh",
        "team": "MI"
      },
      {
        "name": "sai",
        "team": "SRH"
      },
      {
        "name": "siva",
        "team": "MI"
      }
    ]
  },
  {
    "match": [
      "KKR",
      "KXIP"
    ],
    "location": "Kolkata",
    "date": "04-13-2017",
    "time": "8:00PM",
    "result": "KKR",
    "users": [
      {
        "name": "arcot",
        "team": "KXIP"
      },
      {
        "name": "bugga",
        "team": "KKR"
      },
      {
        "name": "harsh",
        "team": "KXIP"
      },
      {
        "name": "khushboo",
        "team": "KXIP"
      },
      {
        "name": "lakku",
        "team": "KXIP"
      },
      {
        "name": "raghu",
        "team": "KKR"
      },
      {
        "name": "ramesh",
        "team": "KKR"
      },
      {
        "name": "sai",
        "team": "KKR"
      },
      {
        "name": "siva",
        "team": "KKR"
      }
    ]
  },
  {
    "match": [
      "RCB",
      "MI"
    ],
    "location": "Bengaluru",
    "date": "04-14-2017",
    "time": "4:00PM",
    "result": "MI",
    "users": [
      {
        "name": "arcot",
        "team": "MI"
      },
      {
        "name": "bugga",
        "team": "RCB"
      },
      {
        "name": "harsh",
        "team": "RCB"
      },
      {
        "name": "khushboo",
        "team": "RCB"
      },
      {
        "name": "lakku",
        "team": "RCB"
      },
      {
        "name": "raghu",
        "team": "MI"
      },
      {
        "name": "ramesh",
        "team": "RCB"
      },
      {
        "name": "sai",
        "team": "MI"
      },
      {
        "name": "siva",
        "team": "RCB"
      }
    ]
  },
  {
    "match": [
      "GL",
      "RPS"
    ],
    "location": "Rajkot",
    "date": "04-14-2017",
    "time": "8:00PM",
    "result": "GL",
    "users": [
      {
        "name": "arcot",
        "team": "RPS"
      },
      {
        "name": "bugga",
        "team": "RPS"
      },
      {
        "name": "harsh",
        "team": "GL"
      },
      {
        "name": "khushboo",
        "team": "GL"
      },
      {
        "name": "lakku",
        "team": "GL"
      },
      {
        "name": "raghu",
        "team": "RPS"
      },
      {
        "name": "ramesh",
        "team": "GL"
      },
      {
        "name": "sai",
        "team": "GL"
      },
      {
        "name": "siva",
        "team": "GL"
      }
    ]
  },
  {
    "match": [
      "KKR",
      "SRH"
    ],
    "location": "Kolkata",
    "date": "04-15-2017",
    "time": "4:00PM",
    "result": "KKR",
    "users": [
      {
        "name": "arcot",
        "team": "SRH"
      },
      {
        "name": "bugga",
        "team": "KKR"
      },
      {
        "name": "harsh",
        "team": "SRH"
      },
      {
        "name": "khushboo",
        "team": "KKR"
      },
      {
        "name": "lakku",
        "team": "SRH"
      },
      {
        "name": "raghu",
        "team": "KKR"
      },
      {
        "name": "ramesh",
        "team": "KKR"
      },
      {
        "name": "sai",
        "team": "KKR"
      },
      {
        "name": "siva",
        "team": "X"
      }
    ]
  },
  {
    "match": [
      "DD",
      "KXIP"
    ],
    "location": "Delhi",
    "date": "04-15-2017",
    "time": "8:00PM",
    "result": "DD",
    "users": [
      {
        "name": "arcot",
        "team": "KXIP"
      },
      {
        "name": "bugga",
        "team": "KXIP"
      },
      {
        "name": "harsh",
        "team": "DD"
      },
      {
        "name": "khushboo",
        "team": "DD"
      },
      {
        "name": "lakku",
        "team": "DD"
      },
      {
        "name": "raghu",
        "team": "KXIP"
      },
      {
        "name": "ramesh",
        "team": "DD"
      },
      {
        "name": "sai",
        "team": "KXIP"
      },
      {
        "name": "siva",
        "team": "KXIP"
      }
    ]
  },
  {
    "match": [
      "MI",
      "GL"
    ],
    "location": "Mumbai",
    "date": "04-16-2017",
    "time": "4:00PM",
    "result": "MI",
    "users": [
      {
        "name": "arcot",
        "team": "MI"
      },
      {
        "name": "bugga",
        "team": "MI"
      },
      {
        "name": "harsh",
        "team": "MI"
      },
      {
        "name": "khushboo",
        "team": "MI"
      },
      {
        "name": "lakku",
        "team": "MI"
      },
      {
        "name": "raghu",
        "team": "MI"
      },
      {
        "name": "ramesh",
        "team": "MI"
      },
      {
        "name": "sai",
        "team": "MI"
      },
      {
        "name": "siva",
        "team": "MI"
      }
    ]
  },
  {
    "match": [
      "RCB",
      "RPS"
    ],
    "location": "Bengaluru",
    "date": "04-16-2017",
    "time": "8:00PM",
    "result": "RPS",
    "users": [
      {
        "name": "arcot",
        "team": "RPS"
      },
      {
        "name": "bugga",
        "team": "RCB"
      },
      {
        "name": "harsh",
        "team": "RPS"
      },
      {
        "name": "khushboo",
        "team": "RCB"
      },
      {
        "name": "lakku",
        "team": "RCB"
      },
      {
        "name": "raghu",
        "team": "RCB"
      },
      {
        "name": "ramesh",
        "team": "RCB"
      },
      {
        "name": "sai",
        "team": "RCB"
      },
      {
        "name": "siva",
        "team": "RCB"
      }
    ]
  },
  {
    "match": [
      "DD",
      "KKR"
    ],
    "location": "Delhi",
    "date": "04-17-2017",
    "time": "4:00PM",
    "result": "KKR",
    "users": [
      {
        "name": "arcot",
        "team": "DD"
      },
      {
        "name": "bugga",
        "team": "KKR"
      },
      {
        "name": "harsh",
        "team": "KKR"
      },
      {
        "name": "khushboo",
        "team": "DD"
      },
      {
        "name": "lakku",
        "team": "DD"
      },
      {
        "name": "raghu",
        "team": "DD"
      },
      {
        "name": "ramesh",
        "team": "DD"
      },
      {
        "name": "sai",
        "team": "KKR"
      },
      {
        "name": "siva",
        "team": "DD"
      }
    ]
  },
  {
    "match": [
      "SRH",
      "KXIP"
    ],
    "location": "Delhi",
    "date": "04-17-2017",
    "time": "8:00PM",
    "result": "SRH",
    "users": [
      {
        "name": "arcot",
        "team": "KXIP"
      },
      {
        "name": "bugga",
        "team": "SRH"
      },
      {
        "name": "harsh",
        "team": "SRH"
      },
      {
        "name": "khushboo",
        "team": "SRH"
      },
      {
        "name": "lakku",
        "team": "SRH"
      },
      {
        "name": "raghu",
        "team": "SRH"
      },
      {
        "name": "ramesh",
        "team": "SRH"
      },
      {
        "name": "sai",
        "team": "KXIP"
      },
      {
        "name": "siva",
        "team": "SRH"
      }
    ]
  },
  {
    "match": [
      "GL",
      "RCB"
    ],
    "location": "Rajkot",
    "date": "04-18-2017",
    "time": "8:00PM",
    "result": "RCB",
    "users": [
      {
        "name": "arcot",
        "team": "GL"
      },
      {
        "name": "bugga",
        "team": "RCB"
      },
      {
        "name": "harsh",
        "team": "GL"
      },
      {
        "name": "khushboo",
        "team": "GL"
      },
      {
        "name": "lakku",
        "team": "RCB"
      },
      {
        "name": "raghu",
        "team": "RCB"
      },
      {
        "name": "ramesh",
        "team": "RCB"
      },
      {
        "name": "sai",
        "team": "GL"
      },
      {
        "name": "siva",
        "team": "RCB"
      }
    ]
  },
  {
    "match": [
      "SRH",
      "DD"
    ],
    "location": "Hyderabad",
    "date": "04-19-2017",
    "time": "8:00PM",
    "result": "SRH",
    "users": [
      {
        "name": "arcot",
        "team": "SRH"
      },
      {
        "name": "bugga",
        "team": "DD"
      },
      {
        "name": "harsh",
        "team": "SRH"
      },
      {
        "name": "khushboo",
        "team": "SRH"
      },
      {
        "name": "lakku",
        "team": "SRH"
      },
      {
        "name": "raghu",
        "team": "DD"
      },
      {
        "name": "ramesh",
        "team": "SRH"
      },
      {
        "name": "sai",
        "team": "DD"
      },
      {
        "name": "siva",
        "team": "DD"
      }
    ]
  },
  {
    "match": [
      "KXIP",
      "MI"
    ],
    "location": "Indore",
    "date": "04-20-2017",
    "time": "8:00PM",
    "result": "MI",
    "users": [
      {
        "name": "arcot",
        "team": "KXIP"
      },
      {
        "name": "bugga",
        "team": "MI"
      },
      {
        "name": "harsh",
        "team": "KXIP"
      },
      {
        "name": "khushboo",
        "team": "MI"
      },
      {
        "name": "lakku",
        "team": "KXIP"
      },
      {
        "name": "raghu",
        "team": "MI"
      },
      {
        "name": "ramesh",
        "team": "MI"
      },
      {
        "name": "sai",
        "team": "MI"
      },
      {
        "name": "siva",
        "team": "MI"
      }
    ]
  },
  {
    "match": [
      "KKR",
      "GL"
    ],
    "location": "Kolkata",
    "date": "04-21-2017",
    "time": "8:00PM",
    "result": "GL",
    "users": [
      {
        "name": "arcot",
        "team": "KKR"
      },
      {
        "name": "bugga",
        "team": "KKR"
      },
      {
        "name": "harsh",
        "team": "GL"
      },
      {
        "name": "khushboo",
        "team": "KKR"
      },
      {
        "name": "lakku",
        "team": "KKR"
      },
      {
        "name": "raghu",
        "team": "KKR"
      },
      {
        "name": "ramesh",
        "team": "GL"
      },
      {
        "name": "sai",
        "team": "KKR"
      },
      {
        "name": "siva",
        "team": "KKR"
      }
    ]
  },
  {
    "match": [
      "RPS",
      "SRH"
    ],
    "location": "Pune",
    "date": "04-22-2017",
    "time": "4:00PM",
    "result": "RPS",
    "users": [
      {
        "name": "arcot",
        "team": "RPS"
      },
      {
        "name": "bugga",
        "team": "RPS"
      },
      {
        "name": "harsh",
        "team": "SRH"
      },
      {
        "name": "khushboo",
        "team": "RPS"
      },
      {
        "name": "lakku",
        "team": "SRH"
      },
      {
        "name": "raghu",
        "team": "X"
      },
      {
        "name": "ramesh",
        "team": "SRH"
      },
      {
        "name": "sai",
        "team": "SRH"
      },
      {
        "name": "siva",
        "team": "RPS"
      }
    ]
  },
  {
    "match": [
      "MI",
      "DD"
    ],
    "location": "Mumbai",
    "date": "04-22-2017",
    "time": "8:00PM",
    "result": "MI",
    "users": [
      {
        "name": "arcot",
        "team": "DD"
      },
      {
        "name": "bugga",
        "team": "MI"
      },
      {
        "name": "harsh",
        "team": "MI"
      },
      {
        "name": "khushboo",
        "team": "MI"
      },
      {
        "name": "lakku",
        "team": "MI"
      },
      {
        "name": "raghu",
        "team": "MI"
      },
      {
        "name": "ramesh",
        "team": "MI"
      },
      {
        "name": "sai",
        "team": "DD"
      },
      {
        "name": "siva",
        "team": "MI"
      }
    ]
  },
  {
    "match": [
      "GL",
      "KXIP"
    ],
    "location": "Rajkot",
    "date": "04-23-2017",
    "time": "4:00PM",
    "result": "KXIP",
    "users": [
      {
        "name": "arcot",
        "team": "KXIP"
      },
      {
        "name": "bugga",
        "team": "KXIP"
      },
      {
        "name": "harsh",
        "team": "GL"
      },
      {
        "name": "khushboo",
        "team": "GL"
      },
      {
        "name": "lakku",
        "team": "GL"
      },
      {
        "name": "raghu",
        "team": "KXIP"
      },
      {
        "name": "ramesh",
        "team": "KXIP"
      },
      {
        "name": "sai",
        "team": "GL"
      },
      {
        "name": "siva",
        "team": "GL"
      }
    ]
  },
  {
    "match": [
      "KKR",
      "RCB"
    ],
    "location": "Kolkata",
    "date": "04-23-2017",
    "time": "8:00PM",
    "result": "KKR",
    "users": [
      {
        "name": "arcot",
        "team": "KKR"
      },
      {
        "name": "bugga",
        "team": "RCB"
      },
      {
        "name": "harsh",
        "team": "KKR"
      },
      {
        "name": "khushboo",
        "team": "RCB"
      },
      {
        "name": "lakku",
        "team": "KKR"
      },
      {
        "name": "raghu",
        "team": "RCB"
      },
      {
        "name": "ramesh",
        "team": "RCB"
      },
      {
        "name": "sai",
        "team": "KKR"
      },
      {
        "name": "siva",
        "team": "RCB"
      }
    ]
  },
  {
    "match": [
      "MI",
      "RPS"
    ],
    "location": "Mumbai",
    "date": "04-24-2017",
    "time": "8:00PM",
    "result": "RPS",
    "users": [
      {
        "name": "arcot",
        "team": "RPS"
      },
      {
        "name": "bugga",
        "team": "MI"
      },
      {
        "name": "harsh",
        "team": "MI"
      },
      {
        "name": "khushboo",
        "team": "RPS"
      },
      {
        "name": "lakku",
        "team": "MI"
      },
      {
        "name": "raghu",
        "team": "MI"
      },
      {
        "name": "ramesh",
        "team": "MI"
      },
      {
        "name": "sai",
        "team": "MI"
      },
      {
        "name": "siva",
        "team": "MI"
      }
    ]
  },
  {
    "match": [
      "RCB",
      "SRH"
    ],
    "location": "Bengaluru",
    "date": "04-25-2017",
    "time": "8:00PM",
    "result": "",
    "users": [
      {
        "name": "arcot",
        "team": "RCB"
      },
      {
        "name": "bugga",
        "team": "RCB"
      },
      {
        "name": "harsh",
        "team": "RCB"
      },
      {
        "name": "khushboo",
        "team": "RCB"
      },
      {
        "name": "lakku",
        "team": "SRH"
      },
      {
        "name": "raghu",
        "team": "RCB"
      },
      {
        "name": "ramesh",
        "team": "RCB"
      },
      {
        "name": "sai",
        "team": "RCB"
      },
      {
        "name": "siva",
        "team": "SRH"
      }
    ]
  },
  {
    "match": [
      "RPS",
      "KKR"
    ],
    "location": "Pune",
    "date": "04-26-2017",
    "time": "8:00PM",
    "result": "KKR",
    "users": [
      {
        "name": "arcot",
        "team": "KKR"
      },
      {
        "name": "bugga",
        "team": "KKR"
      },
      {
        "name": "harsh",
        "team": "RPS"
      },
      {
        "name": "khushboo",
        "team": "RPS"
      },
      {
        "name": "lakku",
        "team": "KKR"
      },
      {
        "name": "raghu",
        "team": "RPS"
      },
      {
        "name": "ramesh",
        "team": "KKR"
      },
      {
        "name": "sai",
        "team": "KKR"
      },
      {
        "name": "siva",
        "team": "RPS"
      }
    ]
  },
  {
    "match": [
      "RCB",
      "GL"
    ],
    "location": "Bengaluru",
    "date": "04-27-2017",
    "time": "8:00PM",
    "result": "GL",
    "users": [
      {
        "name": "arcot",
        "team": "GL"
      },
      {
        "name": "bugga",
        "team": "RCB"
      },
      {
        "name": "harsh",
        "team": "GL"
      },
      {
        "name": "khushboo",
        "team": "RCB"
      },
      {
        "name": "lakku",
        "team": "RCB"
      },
      {
        "name": "raghu",
        "team": "RCB"
      },
      {
        "name": "ramesh",
        "team": "RCB"
      },
      {
        "name": "sai",
        "team": "RCB"
      },
      {
        "name": "siva",
        "team": "RCB"
      }
    ]
  },
  {
    "match": [
      "KKR",
      "DD"
    ],
    "location": "Kolkata",
    "date": "04-28-2017",
    "time": "4:00PM",
    "result": "KKR",
    "users": [
      {
        "name": "arcot",
        "team": "KKR"
      },
      {
        "name": "bugga",
        "team": "DD"
      },
      {
        "name": "harsh",
        "team": "X"
      },
      {
        "name": "khushboo",
        "team": "X"
      },
      {
        "name": "lakku",
        "team": "KKR"
      },
      {
        "name": "raghu",
        "team": "DD"
      },
      {
        "name": "ramesh",
        "team": "KKR"
      },
      {
        "name": "sai",
        "team": "X"
      },
      {
        "name": "siva",
        "team": "DD"
      }
    ]
  },
  {
    "match": [
      "KXIP",
      "SRH"
    ],
    "location": "Mohali",
    "date": "04-28-2017",
    "time": "8:00PM",
    "result": "SRH",
    "users": [
      {
        "name": "arcot",
        "team": "KXIP"
      },
      {
        "name": "bugga",
        "team": "SRH"
      },
      {
        "name": "harsh",
        "team": "KXIP"
      },
      {
        "name": "khushboo",
        "team": "SRH"
      },
      {
        "name": "lakku",
        "team": "SRH"
      },
      {
        "name": "raghu",
        "team": "KXIP"
      },
      {
        "name": "ramesh",
        "team": "KXIP"
      },
      {
        "name": "sai",
        "team": "SRH"
      },
      {
        "name": "siva",
        "team": "KXIP"
      }
    ]
  },
  {
    "match": [
      "RPS",
      "RCB"
    ],
    "location": "Pune",
    "date": "04-29-2017",
    "time": "4:00PM",
    "result": "RPS",
    "users": [
      {
        "name": "arcot",
        "team": "RPS"
      },
      {
        "name": "bugga",
        "team": "RCB"
      },
      {
        "name": "harsh",
        "team": "RPS"
      },
      {
        "name": "khushboo",
        "team": "RPS"
      },
      {
        "name": "lakku",
        "team": "RCB"
      },
      {
        "name": "raghu",
        "team": "RPS"
      },
      {
        "name": "ramesh",
        "team": "RCB"
      },
      {
        "name": "sai",
        "team": "RCB"
      },
      {
        "name": "siva",
        "team": "RCB"
      }
    ]
  },
  {
    "match": [
      "GL",
      "MI"
    ],
    "location": "Rajkot",
    "date": "04-29-2017",
    "time": "8:00PM",
    "result": "MI",
    "users": [
      {
        "name": "arcot",
        "team": "GL"
      },
      {
        "name": "bugga",
        "team": "MI"
      },
      {
        "name": "harsh",
        "team": "MI"
      },
      {
        "name": "khushboo",
        "team": "MI"
      },
      {
        "name": "lakku",
        "team": "MI"
      },
      {
        "name": "raghu",
        "team": "MI"
      },
      {
        "name": "ramesh",
        "team": "MI"
      },
      {
        "name": "sai",
        "team": "MI"
      },
      {
        "name": "siva",
        "team": "MI"
      }
    ]
  },
  {
    "match": [
      "KXIP",
      "DD"
    ],
    "location": "Mohali",
    "date": "04-30-2017",
    "time": "4:00PM",
    "result": "KXIP",
    "users": [
      {
        "name": "arcot",
        "team": "KXIP"
      },
      {
        "name": "bugga",
        "team": "KXIP"
      },
      {
        "name": "harsh",
        "team": "KXIP"
      },
      {
        "name": "khushboo",
        "team": "X"
      },
      {
        "name": "lakku",
        "team": "KXIP"
      },
      {
        "name": "raghu",
        "team": "DD"
      },
      {
        "name": "ramesh",
        "team": "DD"
      },
      {
        "name": "sai",
        "team": "X"
      },
      {
        "name": "siva",
        "team": "KXIP"
      }
    ]
  },
  {
    "match": [
      "SRH",
      "KKR"
    ],
    "location": "Hyderabad",
    "date": "04-30-2017",
    "time": "8:00PM",
    "result": "SRH",
    "users": [
      {
        "name": "arcot",
        "team": "KKR"
      },
      {
        "name": "bugga",
        "team": "SRH"
      },
      {
        "name": "harsh",
        "team": "SRH"
      },
      {
        "name": "khushboo",
        "team": "SRH"
      },
      {
        "name": "lakku",
        "team": "SRH"
      },
      {
        "name": "raghu",
        "team": "SRH"
      },
      {
        "name": "ramesh",
        "team": "SRH"
      },
      {
        "name": "sai",
        "team": "SRH"
      },
      {
        "name": "siva",
        "team": "SRH"
      }
    ]
  },
  {
    "match": [
      "MI",
      "RCB"
    ],
    "location": "Mumbai",
    "date": "05-01-2017",
    "time": "4:00PM",
    "result": "MI",
    "users": [
      {
        "name": "arcot",
        "team": "MI"
      },
      {
        "name": "bugga",
        "team": "RCB"
      },
      {
        "name": "harsh",
        "team": "MI"
      },
      {
        "name": "khushboo",
        "team": "MI"
      },
      {
        "name": "lakku",
        "team": "MI"
      },
      {
        "name": "raghu",
        "team": "MI"
      },
      {
        "name": "ramesh",
        "team": "MI"
      },
      {
        "name": "sai",
        "team": "RCB"
      },
      {
        "name": "siva",
        "team": "MI"
      }
    ]
  },
  {
    "match": [
      "RPS",
      "GL"
    ],
    "location": "Pune",
    "date": "05-01-2017",
    "time": "8:00PM",
    "result": "RPS",
    "users": [
      {
        "name": "arcot",
        "team": "RPS"
      },
      {
        "name": "bugga",
        "team": "GL"
      },
      {
        "name": "harsh",
        "team": "RPS"
      },
      {
        "name": "khushboo",
        "team": "RPS"
      },
      {
        "name": "lakku",
        "team": "RPS"
      },
      {
        "name": "raghu",
        "team": "RPS"
      },
      {
        "name": "ramesh",
        "team": "GL"
      },
      {
        "name": "sai",
        "team": "GL"
      },
      {
        "name": "siva",
        "team": "RPS"
      }
    ]
  },
  {
    "match": [
      "DD",
      "SRH"
    ],
    "location": "Delhi",
    "date": "05-02-2017",
    "time": "8:00PM",
    "result": "DD",
    "users": [
      {
        "name": "arcot",
        "team": "SRH"
      },
      {
        "name": "bugga",
        "team": "DD"
      },
      {
        "name": "harsh",
        "team": "SRH"
      },
      {
        "name": "khushboo",
        "team": "SRH"
      },
      {
        "name": "lakku",
        "team": "SRH"
      },
      {
        "name": "raghu",
        "team": "DD"
      },
      {
        "name": "ramesh",
        "team": "SRH"
      },
      {
        "name": "sai",
        "team": "SRH"
      },
      {
        "name": "siva",
        "team": "DD"
      }
    ]
  },
  {
    "match": [
      "KKR",
      "RPS"
    ],
    "location": "Kolkata",
    "date": "05-03-2017",
    "time": "8:00PM",
    "result": "RPS",
    "users": [
      {
        "name": "arcot",
        "team": "RPS"
      },
      {
        "name": "bugga",
        "team": "KKR"
      },
      {
        "name": "harsh",
        "team": "RPS"
      },
      {
        "name": "khushboo",
        "team": "RPS"
      },
      {
        "name": "lakku",
        "team": "KKR"
      },
      {
        "name": "raghu",
        "team": "RPS"
      },
      {
        "name": "ramesh",
        "team": "KKR"
      },
      {
        "name": "sai",
        "team": "KKR"
      },
      {
        "name": "siva",
        "team": "KKR"
      }
    ]
  },
  {
    "match": [
      "DD",
      "GL"
    ],
    "location": "Delhi",
    "date": "05-04-2017",
    "time": "8:00PM",
    "result": "DD",
    "users": [
      {
        "name": "arcot",
        "team": "GL"
      },
      {
        "name": "bugga",
        "team": "DD"
      },
      {
        "name": "harsh",
        "team": "DD"
      },
      {
        "name": "khushboo",
        "team": "DD"
      },
      {
        "name": "lakku",
        "team": "DD"
      },
      {
        "name": "raghu",
        "team": "DD"
      },
      {
        "name": "ramesh",
        "team": "GL"
      },
      {
        "name": "sai",
        "team": "DD"
      },
      {
        "name": "siva",
        "team": "DD"
      }
    ]
  },
  {
    "match": [
      "RCB",
      "KXIP"
    ],
    "location": "Bengaluru",
    "date": "05-05-2017",
    "time": "8:00PM",
    "result": "KXIP",
    "users": [
      {
        "name": "arcot",
        "team": "KXIP"
      },
      {
        "name": "bugga",
        "team": "RCB"
      },
      {
        "name": "harsh",
        "team": "KXIP"
      },
      {
        "name": "khushboo",
        "team": "RCB"
      },
      {
        "name": "lakku",
        "team": "RCB"
      },
      {
        "name": "raghu",
        "team": "RCB"
      },
      {
        "name": "ramesh",
        "team": "RCB"
      },
      {
        "name": "sai",
        "team": "KXIP"
      },
      {
        "name": "siva",
        "team": "RCB"
      }
    ]
  },
  {
    "match": [
      "SRH",
      "RPS"
    ],
    "location": "Hyderabad",
    "date": "05-06-2017",
    "time": "4:00PM",
    "result": "RPS",
    "users": [
      {
        "name": "arcot",
        "team": "RPS"
      },
      {
        "name": "bugga",
        "team": "SRH"
      },
      {
        "name": "harsh",
        "team": "SRH"
      },
      {
        "name": "khushboo",
        "team": "SRH"
      },
      {
        "name": "lakku",
        "team": "SRH"
      },
      {
        "name": "raghu",
        "team": "SRH"
      },
      {
        "name": "ramesh",
        "team": "SRH"
      },
      {
        "name": "sai",
        "team": "RPS"
      },
      {
        "name": "siva",
        "team": "SRH"
      }
    ]
  },
  {
    "match": [
      "DD",
      "MI"
    ],
    "location": "Delhi",
    "date": "05-06-2017",
    "time": "8:00PM",
    "result": "MI",
    "users": [
      {
        "name": "arcot",
        "team": "DD"
      },
      {
        "name": "bugga",
        "team": "MI"
      },
      {
        "name": "harsh",
        "team": "MI"
      },
      {
        "name": "khushboo",
        "team": "MI"
      },
      {
        "name": "lakku",
        "team": "MI"
      },
      {
        "name": "raghu",
        "team": "MI"
      },
      {
        "name": "ramesh",
        "team": "MI"
      },
      {
        "name": "sai",
        "team": "MI"
      },
      {
        "name": "siva",
        "team": "MI"
      }
    ]
  },
  {
    "match": [
      "RCB",
      "KKR"
    ],
    "location": "Bengaluru",
    "date": "05-07-2017",
    "time": "4:00PM",
    "result": "KKR",
    "users": [
      {
        "name": "arcot",
        "team": "KKR"
      },
      {
        "name": "bugga",
        "team": "RCB"
      },
      {
        "name": "harsh",
        "team": "KKR"
      },
      {
        "name": "khushboo",
        "team": "KKR"
      },
      {
        "name": "lakku",
        "team": "KKR"
      },
      {
        "name": "raghu",
        "team": "RCB"
      },
      {
        "name": "ramesh",
        "team": "RCB"
      },
      {
        "name": "sai",
        "team": "KKR"
      },
      {
        "name": "siva",
        "team": "RCB"
      }
    ]
  },
  {
    "match": [
      "KXIP",
      "GL"
    ],
    "location": "Mohali",
    "date": "05-07-2017",
    "time": "8:00PM",
    "result": "GL",
    "users": [
      {
        "name": "arcot",
        "team": "KXIP"
      },
      {
        "name": "bugga",
        "team": "KXIP"
      },
      {
        "name": "harsh",
        "team": "KXIP"
      },
      {
        "name": "khushboo",
        "team": "KXIP"
      },
      {
        "name": "lakku",
        "team": "GL"
      },
      {
        "name": "raghu",
        "team": "KXIP"
      },
      {
        "name": "ramesh",
        "team": "GL"
      },
      {
        "name": "sai",
        "team": "KXIP"
      },
      {
        "name": "siva",
        "team": "KXIP"
      }
    ]
  },{
    "match": [
      "SRH",
      "MI"
    ],
    "location": "Hyderabad",
    "date": "05-08-2017",
    "time": "8:00PM",
    "result": "SRH",
    "users": [
      {
        "name": "arcot",
        "team": "SRH"
      },
      {
        "name": "bugga",
        "team": "SRH"
      },
      {
        "name": "harsh",
        "team": "MI"
      },
      {
        "name": "khushboo",
        "team": "MI"
      },
      {
        "name": "lakku",
        "team": "SRH"
      },
      {
        "name": "raghu",
        "team": "SRH"
      },
      {
        "name": "ramesh",
        "team": "MI"
      },
      {
        "name": "sai",
        "team": "MI"
      },
      {
        "name": "siva",
        "team": "MI"
      }
    ]
  },{
    "match": [
      "KXIP",
      "KKR"
    ],
    "location": "Mohali",
    "date": "05-09-2017",
    "time": "8:00PM",
    "result": "KXIP",
    "users": [
      {
        "name": "arcot",
        "team": "KKR"
      },
      {
        "name": "bugga",
        "team": "KKR"
      },
      {
        "name": "harsh",
        "team": "KKR"
      },
      {
        "name": "khushboo",
        "team": "KKR"
      },
      {
        "name": "lakku",
        "team": "KKR"
      },
      {
        "name": "raghu",
        "team": "KXIP"
      },
      {
        "name": "ramesh",
        "team": "KXIP"
      },
      {
        "name": "sai",
        "team": "KKR"
      },
      {
        "name": "siva",
        "team": "KXIP"
      }
    ]
  },{
    "match": [
      "GL",
      "DD"
    ],
    "location": "Kanpur",
    "date": "05-10-2017",
    "time": "8:00PM",
    "result": "DD",
    "users": [
      {
        "name": "arcot",
        "team": "GL"
      },
      {
        "name": "bugga",
        "team": "GL"
      },
      {
        "name": "harsh",
        "team": "DD"
      },
      {
        "name": "khushboo",
        "team": "DD"
      },
      {
        "name": "lakku",
        "team": "GL"
      },
      {
        "name": "raghu",
        "team": "DD"
      },
      {
        "name": "ramesh",
        "team": "DD"
      },
      {
        "name": "sai",
        "team": "GL"
      },
      {
        "name": "siva",
        "team": "GL"
      }
    ]
  },{
    "match": [
      "MI",
      "KXIP"
    ],
    "location": "Mumbai",
    "date": "05-11-2017",
    "time": "8:00PM",
    "result": "KXIP",
    "users": [
      {
        "name": "arcot",
        "team": "KXIP"
      },
      {
        "name": "bugga",
        "team": "MI"
      },
      {
        "name": "harsh",
        "team": "MI"
      },
      {
        "name": "khushboo",
        "team": "MI"
      },
      {
        "name": "lakku",
        "team": "MI"
      },
      {
        "name": "raghu",
        "team": "MI"
      },
      {
        "name": "ramesh",
        "team": "KXIP"
      },
      {
        "name": "sai",
        "team": "MI"
      },
      {
        "name": "siva",
        "team": "MI"
      }
    ]
  },{
    "match": [
      "DD",
      "RPS"
    ],
    "location": "Delhi",
    "date": "05-12-2017",
    "time": "8:00PM",
    "result": "DD",
    "users": [
      {
        "name": "arcot",
        "team": "RPS"
      },
      {
        "name": "bugga",
        "team": "DD"
      },
      {
        "name": "harsh",
        "team": "RPS"
      },
      {
        "name": "khushboo",
        "team": "RPS"
      },
      {
        "name": "lakku",
        "team": "DD"
      },
      {
        "name": "raghu",
        "team": "DD"
      },
      {
        "name": "ramesh",
        "team": "DD"
      },
      {
        "name": "sai",
        "team": "RPS"
      },
      {
        "name": "siva",
        "team": "DD"
      }
    ]
  },{
    "match": [
      "GL",
      "SRH"
    ],
    "location": "Kanpur",
    "date": "05-13-2017",
    "time": "4:00PM",
    "result": "SRH",
    "users": [
      {
        "name": "arcot",
        "team": "SRH"
      },
      {
        "name": "bugga",
        "team": "SRH"
      },
      {
        "name": "harsh",
        "team": "SRH"
      },
      {
        "name": "khushboo",
        "team": "SRH"
      },
      {
        "name": "lakku",
        "team": "SRH"
      },
      {
        "name": "raghu",
        "team": "GL"
      },
      {
        "name": "ramesh",
        "team": "SRH"
      },
      {
        "name": "sai",
        "team": "SRH"
      },
      {
        "name": "siva",
        "team": "SRH"
      }
    ]
  },{
    "match": [
      "KKR",
      "MI"
    ],
    "location": "Kolkata",
    "date": "05-13-2017",
    "time": ":00PM",
    "result": "MI",
    "users": [
      {
        "name": "arcot",
        "team": "KKR"
      },
      {
        "name": "bugga",
        "team": "MI"
      },
      {
        "name": "harsh",
        "team": "KKR"
      },
      {
        "name": "khushboo",
        "team": "KKR"
      },
      {
        "name": "lakku",
        "team": "MI"
      },
      {
        "name": "raghu",
        "team": "KKR"
      },
      {
        "name": "ramesh",
        "team": "MI"
      },
      {
        "name": "sai",
        "team": "KKR"
      },
      {
        "name": "siva",
        "team": "MI"
      }
    ]
  },{
    "match": [
      "RPS",
      "KXIP"
    ],
    "location": "Pune",
    "date": "05-14-2017",
    "time": "4:00PM",
    "result": "RPS",
    "users": [
      {
        "name": "arcot",
        "team": "RPS"
      },
      {
        "name": "bugga",
        "team": "RPS"
      },
      {
        "name": "harsh",
        "team": "KXIP"
      },
      {
        "name": "khushboo",
        "team": "RPS"
      },
      {
        "name": "lakku",
        "team": "KXIP"
      },
      {
        "name": "raghu",
        "team": "RPS"
      },
      {
        "name": "ramesh",
        "team": "KXIP"
      },
      {
        "name": "sai",
        "team": "RPS"
      },
      {
        "name": "siva",
        "team": "RPS"
      }
    ]
  },{
    "match": [
      "DD",
      "RCB"
    ],
    "location": "Delhi",
    "date": "05-14-2017",
    "time": "8:00PM",
    "result": "RCB",
    "users": [
      {
        "name": "arcot",
        "team": "RCB"
      },
      {
        "name": "bugga",
        "team": "RCB"
      },
      {
        "name": "harsh",
        "team": "DD"
      },
      {
        "name": "khushboo",
        "team": "DD"
      },
      {
        "name": "lakku",
        "team": "DD"
      },
      {
        "name": "raghu",
        "team": "DD"
      },
      {
        "name": "ramesh",
        "team": "RCB"
      },
      {
        "name": "sai",
        "team": "DD"
      },
      {
        "name": "siva",
        "team": "DD"
      }
    ]
  },{
    "match": [
      "MI",
      "RPS"
    ],
    "location": "Mumbai",
    "date": "05-16-2017",
    "time": "8:00PM",
    "result": "RPS",
    "users": [
      {
        "name": "arcot",
        "team": "RPS"
      },
      {
        "name": "bugga",
        "team": "MI"
      },
      {
        "name": "harsh",
        "team": "MI"
      },
      {
        "name": "khushboo",
        "team": "X"
      },
      {
        "name": "lakku",
        "team": "MI"
      },
      {
        "name": "raghu",
        "team": "RPS"
      },
      {
        "name": "ramesh",
        "team": "MI"
      },
      {
        "name": "sai",
        "team": "RPS"
      },
      {
        "name": "siva",
        "team": "MI"
      }
    ]
  },{
    "match": [
      "SRH",
      "KKR"
    ],
    "location": "Bengaluru",
    "date": "05-17-2017",
    "time": "8:00PM",
    "result": "KKR",
    "users": [
      {
        "name": "arcot",
        "team": "KKR"
      },
      {
        "name": "bugga",
        "team": "SRH"
      },
      {
        "name": "harsh",
        "team": "SRH"
      },
      {
        "name": "khushboo",
        "team": "KKR"
      },
      {
        "name": "lakku",
        "team": "SRH"
      },
      {
        "name": "raghu",
        "team": "SRH"
      },
      {
        "name": "ramesh",
        "team": "SRH"
      },
      {
        "name": "sai",
        "team": "SRH"
      },
      {
        "name": "siva",
        "team": "KKR"
      }
    ]
  }
]