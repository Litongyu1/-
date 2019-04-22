/*障碍物类*/
function Block(img) {
	// 有一个数组属性
	this.arr = [
		{row: 8, col: 8},
		{row: 8, col: 9},
		{row: 8, col: 10},
		{row: 9, col: 10},
		{row: 10, col: 10},
		{row: 13, col: 14},
		{row: 14, col: 14},
		{row: 15, col: 14},
		{row: 16, col: 14},
		

	];
	// 图片属性
	this.img = img;
}