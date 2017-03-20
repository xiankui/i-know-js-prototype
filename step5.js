/**
 * OLOO: objects-linked-to-other-objects
 * 对象之间就像兄弟一样可以任意委托；
 * 一句话，你办事，我放心
 */

// 原始模型
var Widget = {
	// 等同于匿名函数 init: function() {}
	init(width, height) {
		this.width = width || 50;
		this.height = height || 50;
		this.$elem = null;
	},

	insert($where) {
		if (this.$elem) {
			this.$elem.css({
				width: this.width + 'px',
				height: this.height + 'px'
			}).appendTo($where)
		}
	}
}

// 建模
var Button = {
	setup(width, height, label) {
		this.init(width, height);
		this.label = label || 'Default';

		this.$elem = $('<button>').text(this.label);
	},

	build($where) {
		this.insert($where);

		this.$elem.click(this.onClick.bind(this))
	},

	onClick(evt) {
		console.log( "Button '" + this.label + "' clicked!" );
	}
}

// 建立委托（继承）关系
Object.setPrototypeOf(Button, Widget);


$( document ).ready( function(){
	var $body = $( document.body );

	var btn1 = Object.create( Button );
	btn1.setup( 125, 30, "Hello" );

	var btn2 = Object.create( Button );
	btn2.setup( 150, 40, "World" );

	btn1.build( $body );
	btn2.build( $body );
} );

