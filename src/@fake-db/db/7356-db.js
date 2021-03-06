import mock from './../mock';

const course_7356 = [
    {
        "title" : "Lehrgang Geprüfte/r Umsatzsteuer-Experte/in",
        "secondTitle" : "Zertifiziert durch die OTH Amberg-Weiden",
        "description" : "Sie haben Ihren Tätigkeitsschwerpunkt im Bereich Umsatzsteuer? Dann wissen Sie, wie umfangreich und komplex dieses Themengebiet geworden ist – nicht zuletzt durch die vielen Rechtsänderungen und EU-Vorgaben. Als Kombination aus Präsenzseminaren und Online-Lernen bietet Ihnen der praxisbezogene Lehrgang das relevante Fachwissen für Ihren Berufsalltag. Entwickeln Sie sich zum Umsatzsteuer-Experten und lösen Sie auch schwierige Aufgabenstellungen schnell und souverän. Ein aussagekräftiges Abschlusszertifikat bestätigt Ihnen Ihre Kompetenz.",
        "obligationTraining" : [
          {
            "id" : 1,
            "title" : "Vorabfragebogen",
            "teaser" : "Basiswissen für die Assistenz",
            "image" : "http://d8wr4j82ogzfw.cloudfront.net/elearningconcept.jpg",
            "tooltip" : "Wir hätten da einige Fragen vorab"
          },
          {
            "id" : 2,
            "title" : "Update Datensicherheit im Office",
            "teaser" : "Präsenzseminar - Umgang mit Cookies, Phising & Co.",
            "image" : "http://d8wr4j82ogzfw.cloudfront.net/pexels_man_laptop.jpg",
            "tooltip" : "Kommen Sie zu uns. Hier werden Sie geholfen;-)"
          },
          {
            "id" : 3,
            "title" : "e-Learning",
            "teaser" : "Datenschutztraining",
            "image" : "http://d8wr4j82ogzfw.cloudfront.net/illustration-of-human-hand-working.jpg",
            "tooltip" : "Das ist der Tooltip"
          }        
        ],
        "OptionalTrainings" : {
          "MaxSelection": 1,
          "Description": "Sie können aus der unten stehenden Liste ein Wahlseminar belegen.",
          "Trainings": [
            {
              "id" : 1,
              "title" : "Update Datensicherheit im Office",
              "teaser" : "Präsenzseminar - Umgang mit Cookies, Phising & Co.",
              "image" : "http://d8wr4j82ogzfw.cloudfront.net/pexels_man_laptop.jpg",
              "tooltip" : "Kommen Sie zu uns. Hier werden Sie geholfen;-)"
            },
            {
              "id" : 2,
              "title" : "e-Learning",
              "teaser" : "Datenschutztraining",
              "image" : "http://d8wr4j82ogzfw.cloudfront.net/illustration-of-human-hand-working.jpg",
              "tooltip" : "Das ist der Tooltip"
            }
          ]
        }
    }
];

mock.onGet('/api/courses/7356').reply(() => {
    return [200, course_7356];
});

