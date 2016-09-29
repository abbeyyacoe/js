var person = {
	name: "Alex Russell",
	hello: function() {
		console.log(this.name + " says hello world");
	}
}

$("#some-div").click(person.hello.bind(person));
// when div is clicked "Alex Russell" says hello world