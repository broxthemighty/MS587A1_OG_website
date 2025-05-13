function revealMore() {
    const moreInfo = document.getElementById('moreInfo');
    const isVisible = moreInfo.style.display === 'block';
    const memePic = document.getElementById('memePic');
  
    moreInfo.style.display = isVisible ? 'none' : 'block';
    memePic.style.display = isVisible ?  'none' : 'block';
  }
  
  
  