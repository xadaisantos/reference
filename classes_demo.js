class Rectangle {
	constructor (side1, side2){
		this.side1 = side1;
		if (side2 === undefined){
			this.side2 = side1;
		} else {
			this.side2 = side2;
		}
	}

	area(){
		return this.side1 * this.side2;
	}

	diagonal(){
		return (this.side1**2 + this.side2**2)**(1/2);
	}	
}