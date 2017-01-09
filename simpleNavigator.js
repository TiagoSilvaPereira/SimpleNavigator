var simpleNavigator = {
    init: function() {
        this.navigatorEnabled = true;
        this.setActualSlide(1);
        this.showActualSlide();
    },
    setActualSlide: function(slide) {
        if(slide > 0)
            this.actualSlide = slide;
    },
    setSlide: function(slide) {
        this.hideActualSlide();
        this.setActualSlide(slide);
        this.showActualSlide();
        this.markNavigatorPoint();
    },
    enableNavigator: function() {
        this.navigatorEnabled = true;
        document.querySelector('.navigator').style.display = 'block';
    },
    disableNavigator: function() {
        this.navigatorEnabled = false;
        document.querySelector('.navigator').style.display = 'none';
    },
    markNavigatorPoint: function() {
        if(this.navigatorEnabled)
            document.querySelector('#point-line-' + this.actualSlide).classList.add('marked');
    },
    getActualSlideElement: function() {
        return document.querySelector('#slide-' + this.actualSlide);
    },
    showActualSlide: function() {
        this.getActualSlideElement().style.display = 'block';
    },
    hideActualSlide: function() {
        var slide = this.getActualSlideElement();
        this.getActualSlideElement().style.display = 'none';
    },
    next: function() {
        var newSlide = this.actualSlide + 1;
        this.setSlide(newSlide);
        document.getElementById('point-line-' + newSlide).addEventListener('click', function(){
            this.setSlide(newSlide);
        }.bind(this));
    },
    previous: function() {
        this.setSlide(this.actualSlide - 1);
    },
    selectSlide: function(slide) {
        this.setSlide(slide);
    }
}