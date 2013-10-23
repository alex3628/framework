function pageCtrl($scope) {
    $scope.navs = [
    ];
    $scope.pages = [
        {
            "name": "Base",
            "link": "/simple/base"
        },
        {
            "name": "Grid",
            "link": "/simple/grid"
        },
        {
            "name": "Typography",
            "link": "/simple/typography"
        },
        {
            "name": "Menu",
            "link": "/simple/menu"
        },
        {
            "name": "Table",
            "link": "/simple/table"
        },
        {
            "name": "Icons",
            "link": "/simple/icons"
        },
        {
            "name": "Buttons",
            "link": "/simple/buttons"
        },
        {
            "name": "Compass",
            "link": "/simple/compass"
        },
        {
            "name": "Carousel",
            "link": "/simple/carousel"
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