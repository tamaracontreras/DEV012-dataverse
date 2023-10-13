export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  function htmlData(data){
    const content = `
    <dl>
      <dt>Nombre:</dt><${data.name}>
    </dl>
        `
  }
    
  console.log(htmlData(content));
};


//aquí voy crear el html