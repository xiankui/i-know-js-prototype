/**
 * （构造）函数间的混合式原型继承
 */

// 父类
function Widget(width,height) {
	this.width = width || 50; 
	this.height = height || 50; 
	this.$elem = null;
}

Widget.prototype.render = function($where){ 
	if (this.$elem) {
		this.$elem.css( {
			width: this.width + "px", 
			height: this.height + "px"
    } ).appendTo( $where );
  }
};

// 子类
function Button(width,height,label) {
	// 调用“super”构造函数 
	Widget.call( this, width, height ); 
	this.label = label || "Default";
	this.$elem = $( "<button>" ).text( this.label ); 
}

// 让 Button“继承”Widget
Button.prototype = Object.create( Widget.prototype );

// 重写 render(..)
Button.prototype.render = function($where) {
	//“super”调用
	Widget.prototype.render.call( this, $where ); 
	this.$elem.click( this.onClick.bind( this ) );
};

Button.prototype.onClick = function(evt) {
	console.log( "Button '" + this.label + "' clicked!" );
}

console.log( Widget.prototype.isPrototypeOf(Button.prototype) )  // true


$( document ).ready( function(){
	var $body = $( document.body );
	var btn1 = new Button( 125, 30, "Hello" ); 
	var btn2 = new Button( 150, 40, "World" );

  btn1.render( $body );
	btn2.render( $body ); 
});
