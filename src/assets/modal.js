const showDialog = (id) => {
    

/***/

    google.charts.load('current', {
          packages:['timeline', 'table']
        }).then(function () {
          //var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1bIydJJY_-H9NHHhxca9U-jNmKjYUkln14v20N7klAGg/edit?usp=sharing');
          var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1gkyETRRwrCv3ats74cbgGXFp13ABtkkdKS7EcJ10waw/edit?usp=sharing');
          query.setQuery("select B,C,D where A like '"+id+"'");
          query.send(handleQueryResponse);

          function handleQueryResponse(response) {
            if (response.isError()) {
              console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
              return;
            }

            var container = document.getElementById('timeline');
            var chart = new google.visualization.Table(container);
              
            var cssClassNames = { 
                'headerRow': 'head-background',
                'tableRow': 'row-background',
                'headerCell': 'head-background',
                'tableCell': '',
                'headerCell': 'head-background',
                'rowNumberCell': 'head-background'};              
            var options = {width: '100%', height: '100%','showRowNumber': false, 'allowHtml': true, alternatingRowStyle: false, page: 'enable', pageSize: '10', pagingtype: 'simple', title: 'Projekt','cssClassNames': cssClassNames};              
              
            var dataTable = response.getDataTable();              
            chart.draw(dataTable, options);

            /* show dialog */
            
            document.getElementById("dialog").classList.add('show');
            
            const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
            const body = document.body;
          
          }
        });
    
/***/
    
};
const closeDialog = () => {
  const body = document.body;
  //const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  //window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.getElementById('dialog').classList.remove('show');
}
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});