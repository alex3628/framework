function pageCtrl($scope) {
    $scope.navs = [
    ];
    $scope.pages = [
        {
            "name": "Base",
            "link": "/simple/base"
        },
        {
            "name": "Typography",
            "link": "/simple/typography"
        },
        {
            "name": "Buttons",
            "link": "/simple/buttons"
        },
        {
            "name": "Table",
            "link": "/simple/table"
        },
        {
            "name": "Menu",
            "link": "/simple/menu"
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
            "name": "Carousel",
            "link": "/simple/carousel"
        },
        {
            "name": "Compass",
            "link": "/simple/compass"
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