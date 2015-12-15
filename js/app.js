var ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.ageCount = ko.observable(0);
	this.ages = ['Newborn', 'Infant', 'Kitten', 'Cat', 'Old Feller', 'Sadly, deceased.'];
	this.name = ko.observable('Cat');
	this.age = ko.observable(this.ages[this.ageCount()]);
	this.imgSrc = ko.observable('img/a.jpg');

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);

		switch (this.clickCount()){
			case 10:
				this.ageCount(this.ageCount() + 1);
				break;
			case 20:
				this.ageCount(this.ageCount() + 1);
				break;
			case 30:
				this.ageCount(this.ageCount() + 1);
				break;
			case 40:
				this.ageCount(this.ageCount() + 1);
				break;
			case 50:
				this.ageCount(this.ageCount() + 1);
				break;
		}
		
		this.age(this.ages[this.ageCount()]);
	}
};

ko.applyBindings( new ViewModel() );