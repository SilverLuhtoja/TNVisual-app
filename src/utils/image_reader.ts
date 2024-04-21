export  async function getImageFileContents(file :any){
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = async function (e) {
        // console.log(e.target.result)
        //    previewImage.src = e.target.result;
        // imageModel.file = e.target.result
        // image.value = e.target.result
        // console.log(e.target.result);
        
        return  e.target.result
    }
}