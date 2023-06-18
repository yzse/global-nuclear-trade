// Main application single entry point
requirejs([
    'jquery',
    'd3',
    'js/models/network',
    'js/models/trajectory',
    'js/views/network',
    'js/views/modal',
    'js/views/trajectory',
    'js/views/trajectory-table'
], function($, d3, NetworkModel, TrajectoryModel, NetworkView, NetworkModal, TrajectoryView, TrajectoryTable) {

    // Data plotted in network
    var data1 = {
    "directed": true,
    "nodes": [
            {
                "id": 0,
                "binary": "Russian Federation",
                "value": 0.5281828374425815
            },
            {
                "id": 1,
                "binary": "USA",
                "value": 1.0
            },
            {
                "id": 2,
                "binary": "Kazakhstan",
                "value": 0.2997978422835999
            },
            {
                "id": 3,
                "binary": "China",
                "value": 0.7980141914183071
            },
            {
                "id": 4,
                "binary": "Netherlands",
                "value": 0.3028991835045116
            },
            {
                "id": 5,
                "binary": "France",
                "value": 0.5948502291057869
            },
            {
                "id": 6,
                "binary": "Sweden",
                "value": 0.31335532905803376
            },
            {
                "id": 7,
                "binary": "Canada",
                "value": 0.6797536816534675
            },
            {
                "id": 8,
                "binary": "United Kingdom",
                "value": 0.4221480348701019
            },
            {
                "id": 9,
                "binary": "Namibia",
                "value": 0.11473634623340287
            },
            {
                "id": 10,
                "binary": "Australia",
                "value": 0.22064163420144003
            },
            {
                "id": 11,
                "binary": "Germany",
                "value": 0.4348134487280387
            },
            {
                "id": 12,
                "binary": "Rep. of Korea",
                "value": 0.40628851594107196
            },
            {
                "id": 13,
                "binary": "Ukraine",
                "value": 0.09583152461137079
            },
            {
                "id": 14,
                "binary": "Spain",
                "value": 0.1569064355984092
            },
            {
                "id": 15,
                "binary": "Pakistan",
                "value": 0.049449002538191504
            },
            {
                "id": 16,
                "binary": "Belarus",
                "value": 0.04292859270890456
            },
            {
                "id": 17,
                "binary": "Uzbekistan",
                "value": 0.07831296056951355
            },
            {
                "id": 18,
                "binary": "Niger",
                "value": 0.06356391415519365
            },
            {
                "id": 19,
                "binary": "United Arab Emirates",
                "value": 0.046964934705701324
            },
            {
                "id": 20,
                "binary": "Japan",
                "value": 0.20840309762218448
            },
            {
                "id": 21,
                "binary": "Czech Rep.",
                "value": 0.04293345404321736
            },
            {
                "id": 22,
                "binary": "Taiwan, China",
                "value": 0.075389695476104
            },
            {
                "id": 23,
                "binary": "Bangladesh",
                "value": 0.019884441771419566
            },
            {
                "id": 24,
                "binary": "Finland",
                "value": 0.0569571382463833
            },
            {
                "id": 25,
                "binary": "Bulgaria",
                "value": 0.014927560813396806
            },
            {
                "id": 26,
                "binary": "Thailand",
                "value": 0.023134276362191494
            },
            {
                "id": 27,
                "binary": "India",
                "value": 0.024492670234225713
            },
            {
                "id": 28,
                "binary": "Slovakia",
                "value": 0.013976276489304402
            },
            {
                "id": 29,
                "binary": "Switzerland",
                "value": 0.03186944130416795
            },
            {
                "id": 30,
                "binary": "Hungary",
                "value": 0.016344341561163232
            },
            {
                "id": 31,
                "binary": "Belgium",
                "value": 0.07499986457465706
            },
            {
                "id": 32,
                "binary": "Norway",
                "value": 0.026437773980099343
            },
            {
                "id": 33,
                "binary": "Turkey",
                "value": 0.03017448373663609
            },
            {
                "id": 34,
                "binary": "Israel",
                "value": 0.026872980330880557
            },
            {
                "id": 35,
                "binary": "Greece",
                "value": 0.011504605699892052
            },
            {
                "id": 36,
                "binary": "South Africa",
                "value": 0.03382590301470004
            },
            {
                "id": 37,
                "binary": "Bahrain",
                "value": 0.0071268579862992605
            },
            {
                "id": 38,
                "binary": "Saudi Arabia",
                "value": 0.009485607301361052
            },
            {
                "id": 39,
                "binary": "Armenia",
                "value": 0.006000443056230662
            },
            {
                "id": 40,
                "binary": "Nigeria",
                "value": 0.006710453906754472
            },
            {
                "id": 41,
                "binary": "Mexico",
                "value": 0.01397768041160014
            },
            {
                "id": 42,
                "binary": "Brazil",
                "value": 0.032876937208427826
            },
            {
                "id": 43,
                "binary": "Madagascar",
                "value": 0.0050224639394149525
            },
            {
                "id": 44,
                "binary": "Romania",
                "value": 0.013499430896998291
            },
            {
                "id": 45,
                "binary": "Georgia",
                "value": 0.003985832536332236
            },
            {
                "id": 46,
                "binary": "Italy",
                "value": 0.03963442767497463
            },
            {
                "id": 47,
                "binary": "Argentina",
                "value": 0.00891509989931202
            },
            {
                "id": 48,
                "binary": "Guyana",
                "value": 0.0024116922153432094
            },
            {
                "id": 49,
                "binary": "Costa Rica",
                "value": 0.0031581566674112305
            },
            {
                "id": 50,
                "binary": "Singapore",
                "value": 0.015455155462277027
            },
            {
                "id": 51,
                "binary": "Malaysia",
                "value": 0.0107327417655926
            },
            {
                "id": 52,
                "binary": "Iran",
                "value": 0.0039007288778107976
            },
            {
                "id": 53,
                "binary": "Qatar",
                "value": 0.00211060002592384
            }
        ],
        "links": [
            {
                "source": 0,
                "target": 1
            },
            {
                "source": 1,
                "target": 0
            },
            {
                "source": 2,
                "target": 3
            },
            {
                "source": 3,
                "target": 2
            },
            {
                "source": 1,
                "target": 4
            },
            {
                "source": 4,
                "target": 1
            },
            {
                "source": 5,
                "target": 6
            },
            {
                "source": 6,
                "target": 5
            },
            {
                "source": 7,
                "target": 8
            },
            {
                "source": 8,
                "target": 7
            },
            {
                "source": 9,
                "target": 3
            },
            {
                "source": 3,
                "target": 9
            },
            {
                "source": 10,
                "target": 3
            },
            {
                "source": 3,
                "target": 10
            },
            {
                "source": 11,
                "target": 1
            },
            {
                "source": 1,
                "target": 11
            },
            {
                "source": 1,
                "target": 7
            },
            {
                "source": 7,
                "target": 1
            },
            {
                "source": 8,
                "target": 1
            },
            {
                "source": 1,
                "target": 8
            },
            {
                "source": 12,
                "target": 2
            },
            {
                "source": 2,
                "target": 12
            },
            {
                "source": 2,
                "target": 7
            },
            {
                "source": 7,
                "target": 2
            },
            {
                "source": 7,
                "target": 10
            },
            {
                "source": 10,
                "target": 7
            },
            {
                "source": 6,
                "target": 13
            },
            {
                "source": 13,
                "target": 6
            },
            {
                "source": 14,
                "target": 8
            },
            {
                "source": 8,
                "target": 14
            },
            {
                "source": 0,
                "target": 12
            },
            {
                "source": 12,
                "target": 0
            },
            {
                "source": 6,
                "target": 0
            },
            {
                "source": 0,
                "target": 6
            },
            {
                "source": 15,
                "target": 3
            },
            {
                "source": 3,
                "target": 15
            },
            {
                "source": 5,
                "target": 12
            },
            {
                "source": 12,
                "target": 5
            },
            {
                "source": 0,
                "target": 16
            },
            {
                "source": 16,
                "target": 0
            },
            {
                "source": 1,
                "target": 7
            },
            {
                "source": 7,
                "target": 1
            },
            {
                "source": 7,
                "target": 17
            },
            {
                "source": 17,
                "target": 7
            },
            {
                "source": 7,
                "target": 11
            },
            {
                "source": 11,
                "target": 7
            },
            {
                "source": 5,
                "target": 18
            },
            {
                "source": 18,
                "target": 5
            },
            {
                "source": 12,
                "target": 19
            },
            {
                "source": 19,
                "target": 12
            },
            {
                "source": 10,
                "target": 12
            },
            {
                "source": 12,
                "target": 10
            },
            {
                "source": 20,
                "target": 5
            },
            {
                "source": 5,
                "target": 20
            },
            {
                "source": 1,
                "target": 7
            },
            {
                "source": 7,
                "target": 1
            },
            {
                "source": 8,
                "target": 5
            },
            {
                "source": 5,
                "target": 8
            },
            {
                "source": 5,
                "target": 1
            },
            {
                "source": 1,
                "target": 5
            },
            {
                "source": 0,
                "target": 13
            },
            {
                "source": 13,
                "target": 0
            },
            {
                "source": 1,
                "target": 7
            },
            {
                "source": 7,
                "target": 1
            },
            {
                "source": 0,
                "target": 21
            },
            {
                "source": 21,
                "target": 0
            },
            {
                "source": 12,
                "target": 20
            },
            {
                "source": 20,
                "target": 12
            },
            {
                "source": 7,
                "target": 4
            },
            {
                "source": 4,
                "target": 7
            },
            {
                "source": 5,
                "target": 3
            },
            {
                "source": 3,
                "target": 5
            },
            {
                "source": 4,
                "target": 1
            },
            {
                "source": 1,
                "target": 4
            },
            {
                "source": 14,
                "target": 5
            },
            {
                "source": 5,
                "target": 14
            },
            {
                "source": 3,
                "target": 20
            },
            {
                "source": 20,
                "target": 3
            },
            {
                "source": 0,
                "target": 5
            },
            {
                "source": 5,
                "target": 0
            },
            {
                "source": 3,
                "target": 17
            },
            {
                "source": 17,
                "target": 3
            },
            {
                "source": 14,
                "target": 1
            },
            {
                "source": 1,
                "target": 14
            },
            {
                "source": 5,
                "target": 11
            },
            {
                "source": 11,
                "target": 5
            },
            {
                "source": 4,
                "target": 12
            },
            {
                "source": 12,
                "target": 4
            },
            {
                "source": 8,
                "target": 5
            },
            {
                "source": 5,
                "target": 8
            },
            {
                "source": 8,
                "target": 6
            },
            {
                "source": 6,
                "target": 8
            },
            {
                "source": 1,
                "target": 22
            },
            {
                "source": 22,
                "target": 1
            },
            {
                "source": 1,
                "target": 20
            },
            {
                "source": 20,
                "target": 1
            },
            {
                "source": 17,
                "target": 5
            },
            {
                "source": 5,
                "target": 17
            },
            {
                "source": 0,
                "target": 23
            },
            {
                "source": 23,
                "target": 0
            },
            {
                "source": 12,
                "target": 3
            },
            {
                "source": 3,
                "target": 12
            },
            {
                "source": 10,
                "target": 5
            },
            {
                "source": 5,
                "target": 10
            },
            {
                "source": 2,
                "target": 5
            },
            {
                "source": 5,
                "target": 2
            },
            {
                "source": 6,
                "target": 11
            },
            {
                "source": 11,
                "target": 6
            },
            {
                "source": 14,
                "target": 6
            },
            {
                "source": 6,
                "target": 14
            },
            {
                "source": 8,
                "target": 11
            },
            {
                "source": 11,
                "target": 8
            },
            {
                "source": 5,
                "target": 9
            },
            {
                "source": 9,
                "target": 5
            },
            {
                "source": 7,
                "target": 22
            },
            {
                "source": 22,
                "target": 7
            },
            {
                "source": 3,
                "target": 7
            },
            {
                "source": 7,
                "target": 3
            },
            {
                "source": 7,
                "target": 1
            },
            {
                "source": 1,
                "target": 7
            },
            {
                "source": 24,
                "target": 11
            },
            {
                "source": 11,
                "target": 24
            },
            {
                "source": 20,
                "target": 7
            },
            {
                "source": 7,
                "target": 20
            },
            {
                "source": 5,
                "target": 8
            },
            {
                "source": 8,
                "target": 5
            },
            {
                "source": 25,
                "target": 0
            },
            {
                "source": 0,
                "target": 25
            },
            {
                "source": 3,
                "target": 0
            },
            {
                "source": 0,
                "target": 3
            },
            {
                "source": 11,
                "target": 3
            },
            {
                "source": 3,
                "target": 11
            },
            {
                "source": 2,
                "target": 3
            },
            {
                "source": 3,
                "target": 2
            },
            {
                "source": 4,
                "target": 11
            },
            {
                "source": 11,
                "target": 4
            },
            {
                "source": 12,
                "target": 3
            },
            {
                "source": 3,
                "target": 12
            },
            {
                "source": 18,
                "target": 7
            },
            {
                "source": 7,
                "target": 18
            },
            {
                "source": 3,
                "target": 26
            },
            {
                "source": 26,
                "target": 3
            },
            {
                "source": 3,
                "target": 27
            },
            {
                "source": 27,
                "target": 3
            },
            {
                "source": 28,
                "target": 0
            },
            {
                "source": 0,
                "target": 28
            },
            {
                "source": 11,
                "target": 29
            },
            {
                "source": 29,
                "target": 11
            },
            {
                "source": 11,
                "target": 6
            },
            {
                "source": 6,
                "target": 11
            },
            {
                "source": 1,
                "target": 5
            },
            {
                "source": 5,
                "target": 1
            },
            {
                "source": 11,
                "target": 5
            },
            {
                "source": 5,
                "target": 11
            },
            {
                "source": 30,
                "target": 0
            },
            {
                "source": 0,
                "target": 30
            },
            {
                "source": 0,
                "target": 11
            },
            {
                "source": 11,
                "target": 0
            },
            {
                "source": 1,
                "target": 20
            },
            {
                "source": 20,
                "target": 1
            },
            {
                "source": 1,
                "target": 12
            },
            {
                "source": 12,
                "target": 1
            },
            {
                "source": 8,
                "target": 12
            },
            {
                "source": 12,
                "target": 8
            },
            {
                "source": 1,
                "target": 3
            },
            {
                "source": 3,
                "target": 1
            },
            {
                "source": 31,
                "target": 14
            },
            {
                "source": 14,
                "target": 31
            },
            {
                "source": 3,
                "target": 19
            },
            {
                "source": 19,
                "target": 3
            },
            {
                "source": 32,
                "target": 3
            },
            {
                "source": 3,
                "target": 32
            },
            {
                "source": 3,
                "target": 1
            },
            {
                "source": 1,
                "target": 3
            },
            {
                "source": 11,
                "target": 1
            },
            {
                "source": 1,
                "target": 11
            },
            {
                "source": 33,
                "target": 0
            },
            {
                "source": 0,
                "target": 33
            },
            {
                "source": 20,
                "target": 1
            },
            {
                "source": 1,
                "target": 20
            },
            {
                "source": 12,
                "target": 18
            },
            {
                "source": 18,
                "target": 12
            },
            {
                "source": 3,
                "target": 34
            },
            {
                "source": 34,
                "target": 3
            },
            {
                "source": 6,
                "target": 11
            },
            {
                "source": 11,
                "target": 6
            },
            {
                "source": 11,
                "target": 8
            },
            {
                "source": 8,
                "target": 11
            },
            {
                "source": 7,
                "target": 1
            },
            {
                "source": 1,
                "target": 7
            },
            {
                "source": 10,
                "target": 1
            },
            {
                "source": 1,
                "target": 10
            },
            {
                "source": 3,
                "target": 8
            },
            {
                "source": 8,
                "target": 3
            },
            {
                "source": 3,
                "target": 1
            },
            {
                "source": 1,
                "target": 3
            },
            {
                "source": 11,
                "target": 3
            },
            {
                "source": 3,
                "target": 11
            },
            {
                "source": 0,
                "target": 24
            },
            {
                "source": 24,
                "target": 0
            },
            {
                "source": 24,
                "target": 14
            },
            {
                "source": 14,
                "target": 24
            },
            {
                "source": 12,
                "target": 1
            },
            {
                "source": 1,
                "target": 12
            },
            {
                "source": 6,
                "target": 24
            },
            {
                "source": 24,
                "target": 6
            },
            {
                "source": 3,
                "target": 35
            },
            {
                "source": 35,
                "target": 3
            },
            {
                "source": 36,
                "target": 5
            },
            {
                "source": 5,
                "target": 36
            },
            {
                "source": 3,
                "target": 2
            },
            {
                "source": 2,
                "target": 3
            },
            {
                "source": 4,
                "target": 6
            },
            {
                "source": 6,
                "target": 4
            },
            {
                "source": 9,
                "target": 7
            },
            {
                "source": 7,
                "target": 9
            },
            {
                "source": 18,
                "target": 7
            },
            {
                "source": 7,
                "target": 18
            },
            {
                "source": 3,
                "target": 0
            },
            {
                "source": 0,
                "target": 3
            },
            {
                "source": 3,
                "target": 37
            },
            {
                "source": 37,
                "target": 3
            },
            {
                "source": 5,
                "target": 11
            },
            {
                "source": 11,
                "target": 5
            },
            {
                "source": 1,
                "target": 31
            },
            {
                "source": 31,
                "target": 1
            },
            {
                "source": 24,
                "target": 22
            },
            {
                "source": 22,
                "target": 24
            },
            {
                "source": 0,
                "target": 13
            },
            {
                "source": 13,
                "target": 0
            },
            {
                "source": 0,
                "target": 3
            },
            {
                "source": 3,
                "target": 0
            },
            {
                "source": 5,
                "target": 6
            },
            {
                "source": 6,
                "target": 5
            },
            {
                "source": 1,
                "target": 11
            },
            {
                "source": 11,
                "target": 1
            },
            {
                "source": 7,
                "target": 12
            },
            {
                "source": 12,
                "target": 7
            },
            {
                "source": 11,
                "target": 4
            },
            {
                "source": 4,
                "target": 11
            },
            {
                "source": 38,
                "target": 3
            },
            {
                "source": 3,
                "target": 38
            },
            {
                "source": 7,
                "target": 3
            },
            {
                "source": 3,
                "target": 7
            },
            {
                "source": 4,
                "target": 8
            },
            {
                "source": 8,
                "target": 4
            },
            {
                "source": 0,
                "target": 2
            },
            {
                "source": 2,
                "target": 0
            },
            {
                "source": 1,
                "target": 7
            },
            {
                "source": 7,
                "target": 1
            },
            {
                "source": 29,
                "target": 0
            },
            {
                "source": 0,
                "target": 29
            },
            {
                "source": 39,
                "target": 0
            },
            {
                "source": 0,
                "target": 39
            },
            {
                "source": 31,
                "target": 11
            },
            {
                "source": 11,
                "target": 31
            },
            {
                "source": 40,
                "target": 3
            },
            {
                "source": 3,
                "target": 40
            },
            {
                "source": 13,
                "target": 1
            },
            {
                "source": 1,
                "target": 13
            },
            {
                "source": 20,
                "target": 1
            },
            {
                "source": 1,
                "target": 20
            },
            {
                "source": 4,
                "target": 5
            },
            {
                "source": 5,
                "target": 4
            },
            {
                "source": 1,
                "target": 41
            },
            {
                "source": 41,
                "target": 1
            },
            {
                "source": 20,
                "target": 3
            },
            {
                "source": 3,
                "target": 20
            },
            {
                "source": 1,
                "target": 4
            },
            {
                "source": 4,
                "target": 1
            },
            {
                "source": 15,
                "target": 3
            },
            {
                "source": 3,
                "target": 15
            },
            {
                "source": 0,
                "target": 1
            },
            {
                "source": 1,
                "target": 0
            },
            {
                "source": 42,
                "target": 7
            },
            {
                "source": 7,
                "target": 42
            },
            {
                "source": 32,
                "target": 1
            },
            {
                "source": 1,
                "target": 32
            },
            {
                "source": 5,
                "target": 0
            },
            {
                "source": 0,
                "target": 5
            },
            {
                "source": 3,
                "target": 26
            },
            {
                "source": 26,
                "target": 3
            },
            {
                "source": 3,
                "target": 43
            },
            {
                "source": 43,
                "target": 3
            },
            {
                "source": 0,
                "target": 3
            },
            {
                "source": 3,
                "target": 0
            },
            {
                "source": 44,
                "target": 7
            },
            {
                "source": 7,
                "target": 44
            },
            {
                "source": 1,
                "target": 3
            },
            {
                "source": 3,
                "target": 1
            },
            {
                "source": 8,
                "target": 7
            },
            {
                "source": 7,
                "target": 8
            },
            {
                "source": 3,
                "target": 22
            },
            {
                "source": 22,
                "target": 3
            },
            {
                "source": 5,
                "target": 4
            },
            {
                "source": 4,
                "target": 5
            },
            {
                "source": 3,
                "target": 1
            },
            {
                "source": 1,
                "target": 3
            },
            {
                "source": 42,
                "target": 1
            },
            {
                "source": 1,
                "target": 42
            },
            {
                "source": 20,
                "target": 12
            },
            {
                "source": 12,
                "target": 20
            },
            {
                "source": 8,
                "target": 20
            },
            {
                "source": 20,
                "target": 8
            },
            {
                "source": 31,
                "target": 4
            },
            {
                "source": 4,
                "target": 31
            },
            {
                "source": 11,
                "target": 14
            },
            {
                "source": 14,
                "target": 11
            },
            {
                "source": 22,
                "target": 3
            },
            {
                "source": 3,
                "target": 22
            },
            {
                "source": 14,
                "target": 31
            },
            {
                "source": 31,
                "target": 14
            },
            {
                "source": 4,
                "target": 8
            },
            {
                "source": 8,
                "target": 4
            },
            {
                "source": 11,
                "target": 5
            },
            {
                "source": 5,
                "target": 11
            },
            {
                "source": 6,
                "target": 1
            },
            {
                "source": 1,
                "target": 6
            },
            {
                "source": 11,
                "target": 12
            },
            {
                "source": 12,
                "target": 11
            },
            {
                "source": 44,
                "target": 45
            },
            {
                "source": 45,
                "target": 44
            },
            {
                "source": 1,
                "target": 22
            },
            {
                "source": 22,
                "target": 1
            },
            {
                "source": 46,
                "target": 3
            },
            {
                "source": 3,
                "target": 46
            },
            {
                "source": 4,
                "target": 3
            },
            {
                "source": 3,
                "target": 4
            },
            {
                "source": 33,
                "target": 1
            },
            {
                "source": 1,
                "target": 33
            },
            {
                "source": 1,
                "target": 36
            },
            {
                "source": 36,
                "target": 1
            },
            {
                "source": 3,
                "target": 24
            },
            {
                "source": 24,
                "target": 3
            },
            {
                "source": 12,
                "target": 7
            },
            {
                "source": 7,
                "target": 12
            },
            {
                "source": 47,
                "target": 2
            },
            {
                "source": 2,
                "target": 47
            },
            {
                "source": 46,
                "target": 4
            },
            {
                "source": 4,
                "target": 46
            },
            {
                "source": 11,
                "target": 1
            },
            {
                "source": 1,
                "target": 11
            },
            {
                "source": 8,
                "target": 5
            },
            {
                "source": 5,
                "target": 8
            },
            {
                "source": 24,
                "target": 12
            },
            {
                "source": 12,
                "target": 24
            },
            {
                "source": 8,
                "target": 20
            },
            {
                "source": 20,
                "target": 8
            },
            {
                "source": 8,
                "target": 22
            },
            {
                "source": 22,
                "target": 8
            },
            {
                "source": 31,
                "target": 20
            },
            {
                "source": 20,
                "target": 31
            },
            {
                "source": 3,
                "target": 33
            },
            {
                "source": 33,
                "target": 3
            },
            {
                "source": 0,
                "target": 3
            },
            {
                "source": 3,
                "target": 0
            },
            {
                "source": 14,
                "target": 4
            },
            {
                "source": 4,
                "target": 14
            },
            {
                "source": 6,
                "target": 8
            },
            {
                "source": 8,
                "target": 6
            },
            {
                "source": 2,
                "target": 1
            },
            {
                "source": 1,
                "target": 2
            },
            {
                "source": 1,
                "target": 0
            },
            {
                "source": 0,
                "target": 1
            },
            {
                "source": 7,
                "target": 12
            },
            {
                "source": 12,
                "target": 7
            },
            {
                "source": 11,
                "target": 8
            },
            {
                "source": 8,
                "target": 11
            },
            {
                "source": 20,
                "target": 12
            },
            {
                "source": 12,
                "target": 20
            },
            {
                "source": 11,
                "target": 4
            },
            {
                "source": 4,
                "target": 11
            },
            {
                "source": 4,
                "target": 6
            },
            {
                "source": 6,
                "target": 4
            },
            {
                "source": 36,
                "target": 7
            },
            {
                "source": 7,
                "target": 36
            },
            {
                "source": 5,
                "target": 20
            },
            {
                "source": 20,
                "target": 5
            },
            {
                "source": 0,
                "target": 3
            },
            {
                "source": 3,
                "target": 0
            },
            {
                "source": 3,
                "target": 20
            },
            {
                "source": 20,
                "target": 3
            },
            {
                "source": 5,
                "target": 3
            },
            {
                "source": 3,
                "target": 5
            },
            {
                "source": 42,
                "target": 8
            },
            {
                "source": 8,
                "target": 42
            },
            {
                "source": 0,
                "target": 3
            },
            {
                "source": 3,
                "target": 0
            },
            {
                "source": 36,
                "target": 3
            },
            {
                "source": 3,
                "target": 36
            },
            {
                "source": 1,
                "target": 11
            },
            {
                "source": 11,
                "target": 1
            },
            {
                "source": 1,
                "target": 14
            },
            {
                "source": 14,
                "target": 1
            },
            {
                "source": 14,
                "target": 1
            },
            {
                "source": 1,
                "target": 14
            },
            {
                "source": 1,
                "target": 34
            },
            {
                "source": 34,
                "target": 1
            },
            {
                "source": 36,
                "target": 3
            },
            {
                "source": 3,
                "target": 36
            },
            {
                "source": 11,
                "target": 0
            },
            {
                "source": 0,
                "target": 11
            },
            {
                "source": 13,
                "target": 0
            },
            {
                "source": 0,
                "target": 13
            },
            {
                "source": 20,
                "target": 22
            },
            {
                "source": 22,
                "target": 20
            },
            {
                "source": 0,
                "target": 7
            },
            {
                "source": 7,
                "target": 0
            },
            {
                "source": 3,
                "target": 11
            },
            {
                "source": 11,
                "target": 3
            },
            {
                "source": 1,
                "target": 5
            },
            {
                "source": 5,
                "target": 1
            },
            {
                "source": 7,
                "target": 20
            },
            {
                "source": 20,
                "target": 7
            },
            {
                "source": 12,
                "target": 3
            },
            {
                "source": 3,
                "target": 12
            },
            {
                "source": 11,
                "target": 1
            },
            {
                "source": 1,
                "target": 11
            },
            {
                "source": 8,
                "target": 1
            },
            {
                "source": 1,
                "target": 8
            },
            {
                "source": 4,
                "target": 20
            },
            {
                "source": 20,
                "target": 4
            },
            {
                "source": 48,
                "target": 36
            },
            {
                "source": 36,
                "target": 48
            },
            {
                "source": 46,
                "target": 1
            },
            {
                "source": 1,
                "target": 46
            },
            {
                "source": 42,
                "target": 4
            },
            {
                "source": 4,
                "target": 42
            },
            {
                "source": 22,
                "target": 3
            },
            {
                "source": 3,
                "target": 22
            },
            {
                "source": 11,
                "target": 5
            },
            {
                "source": 5,
                "target": 11
            },
            {
                "source": 22,
                "target": 20
            },
            {
                "source": 20,
                "target": 22
            },
            {
                "source": 5,
                "target": 7
            },
            {
                "source": 7,
                "target": 5
            },
            {
                "source": 4,
                "target": 32
            },
            {
                "source": 32,
                "target": 4
            },
            {
                "source": 7,
                "target": 12
            },
            {
                "source": 12,
                "target": 7
            },
            {
                "source": 49,
                "target": 1
            },
            {
                "source": 1,
                "target": 49
            },
            {
                "source": 1,
                "target": 10
            },
            {
                "source": 10,
                "target": 1
            },
            {
                "source": 50,
                "target": 20
            },
            {
                "source": 20,
                "target": 50
            },
            {
                "source": 31,
                "target": 8
            },
            {
                "source": 8,
                "target": 31
            },
            {
                "source": 51,
                "target": 20
            },
            {
                "source": 20,
                "target": 51
            },
            {
                "source": 5,
                "target": 31
            },
            {
                "source": 31,
                "target": 5
            },
            {
                "source": 5,
                "target": 12
            },
            {
                "source": 12,
                "target": 5
            },
            {
                "source": 1,
                "target": 20
            },
            {
                "source": 20,
                "target": 1
            },
            {
                "source": 42,
                "target": 34
            },
            {
                "source": 34,
                "target": 42
            },
            {
                "source": 46,
                "target": 0
            },
            {
                "source": 0,
                "target": 46
            },
            {
                "source": 3,
                "target": 7
            },
            {
                "source": 7,
                "target": 3
            },
            {
                "source": 4,
                "target": 11
            },
            {
                "source": 11,
                "target": 4
            },
            {
                "source": 4,
                "target": 0
            },
            {
                "source": 0,
                "target": 4
            },
            {
                "source": 3,
                "target": 20
            },
            {
                "source": 20,
                "target": 3
            },
            {
                "source": 46,
                "target": 8
            },
            {
                "source": 8,
                "target": 46
            },
            {
                "source": 3,
                "target": 11
            },
            {
                "source": 11,
                "target": 3
            },
            {
                "source": 5,
                "target": 31
            },
            {
                "source": 31,
                "target": 5
            },
            {
                "source": 46,
                "target": 11
            },
            {
                "source": 11,
                "target": 46
            },
            {
                "source": 11,
                "target": 1
            },
            {
                "source": 1,
                "target": 11
            },
            {
                "source": 5,
                "target": 10
            },
            {
                "source": 10,
                "target": 5
            },
            {
                "source": 52,
                "target": 3
            },
            {
                "source": 3,
                "target": 52
            },
            {
                "source": 5,
                "target": 4
            },
            {
                "source": 4,
                "target": 5
            },
            {
                "source": 5,
                "target": 11
            },
            {
                "source": 11,
                "target": 5
            },
            {
                "source": 3,
                "target": 22
            },
            {
                "source": 22,
                "target": 3
            },
            {
                "source": 12,
                "target": 4
            },
            {
                "source": 4,
                "target": 12
            },
            {
                "source": 1,
                "target": 10
            },
            {
                "source": 10,
                "target": 1
            },
            {
                "source": 3,
                "target": 53
            },
            {
                "source": 53,
                "target": 3
            },
            {
                "source": 7,
                "target": 12
            },
            {
                "source": 12,
                "target": 7
            },
            {
                "source": 4,
                "target": 31
            },
            {
                "source": 31,
                "target": 4
            },
            {
                "source": 7,
                "target": 11
            },
            {
                "source": 11,
                "target": 7
            }
        ],
        "multigraph": false,
        "graph": []
    }

    var data = [data1];

    // Initializing backbone model for network app.
    this.network_model = new NetworkModel( data );

    // Initializing all backbone views.
    this.network_modal = new NetworkModal();
    this.network_view = new NetworkView( { "model" : this.network_model } );
    
    // Introduce trajectory logic
    this.trajectory_model = new TrajectoryModel( trajectory );
    this.trajectory_table = new TrajectoryTable( {"model" : this.trajectory_model });
    this.trajectory_view = new TrajectoryView( { "model" : this.trajectory_model, "network_view" : this.network_view});

});
