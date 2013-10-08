function pageCtrl($scope) {
    $scope.navs = [
        {
            "name": "Blog",
            "link": "/blog"
        },
        {
            "name": "Examples",
            "link": "/examples"
        }
    ];
    $scope.pages = [
        {
            "title": "About",
            "link": "/examples/about"
        },
        {
            "title": "Carousel",
            "link": "/examples/carousel"
        },
        {
            "title": "Compass",
            "link": "/examples/compass"
        },
        {
            "title": "Grid",
            "link": "/examples/grid"
        },
        {
            "title": "Icons",
            "link": "/examples/icons"
        },
        {
            "title": "Typography",
            "link": "/examples/typography"
        }
    ];
    $scope.crumbFirst = 'Examples';
    $scope.crumbSecond = 'About';


    $scope.submenuOverview = 'Overview';
    $scope.submenuCode = 'Code';
    $scope.submenuDemo = 'Demo';
    $scope.submenuTop = 'Top';
}