function pageCtrl($scope) {
    $scope.navs = [
    ];
    $scope.pages = [
        {
            "name": "Carousel",
            "link": "/simple/carousel"
        },
        {
            "name": "Compass",
            "link": "/simple/compass"
        },
        {
            "name": "Grid",
            "link": "/simple/grid"
        },
        {
            "name": "Icons",
            "link": "/simple/icons"
        },
        {
            "name": "Typography",
            "link": "/simple/typography"
        },
        {
            "name": "Blog",
            "link": "/blog"
        }
    ];

    $scope.logo ={
        "name": "Simple CSS",
        "link": "/simple/about"
    };

    $scope.footer = '@ 2013 AKQA SH TECHNOLOGY';
}