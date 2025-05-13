function revealMore() {
    // variables
    const moreInfo = document.getElementById('moreInfo');
    const isVisible = moreInfo.style.display === 'block';
    
    // visibility settings using logic gate
    moreInfo.style.display = isVisible ? 'none' : 'block';
  }
  
  
  