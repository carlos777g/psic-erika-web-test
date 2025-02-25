export const renderHome = (req, res) => {
    res.render('index', { 
      title: 'Inicio - PsicErika', 
      pageCSS: 'css/index.css' 
    });
  };
  
  export const renderAbout = (req, res) => {
    res.render('about', { 
      title: 'Sobre mí - PsicErika', 
      pageCSS: 'css/about.css' 
    });
  };
  
  export const renderPsiconfort = (req, res) => {
    res.render('psiconfort', { 
      title: 'Psiconfort - PsicErika', 
      pageCSS: 'css/psiconfort.css' 
    });
  };
  
  export const renderTerapiaOnline = (req, res) => {
    res.render('terapia_online', { 
      title: 'Terapia Online - PsicErika', 
      pageCSS: 'css/contact.css' 
    });
  };