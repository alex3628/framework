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
    $scope.crumbFirst = 'Examples';
    $scope.crumbSecond = 'About';


    $scope.submenuOverview = 'Overview';
    $scope.submenuCode = 'Code';
    $scope.submenuDemo = 'Demo';
    $scope.submenuTop = 'Top';
}