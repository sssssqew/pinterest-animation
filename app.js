const imgs = document.querySelectorAll('section span img')
const startInterval = (milliseconds, callback) => {
  callback();
  return setInterval(callback, milliseconds);
};

let sectionNum = 0, index = 0
startInterval(6000, function () {
  console.log('update img src ...')
  const timeId = setInterval(function(){
    console.log(sectionNum, index)
    imgs[index].src = `imgs/section-${sectionNum+1}-${+index+1}.jpg`
    index++
    if(index > imgs.length - 1){
      index = 0
      clearInterval(timeId)
    } 
  }, 200)
  sectionNum++ 
  if(sectionNum >= 3) sectionNum = 0
});
