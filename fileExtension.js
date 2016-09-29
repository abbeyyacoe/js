function fileExtension(filename) {
	return filename.split('.').pop();
}

console.log(fileExtension('secret.txt'));	