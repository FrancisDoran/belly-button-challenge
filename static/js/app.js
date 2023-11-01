// check data
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'
d3.json(url).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
});
// graphs
function makecharts(selection){
    d3.json(url).then((data)=>{
        // get filtered data
        let samples=data.samples
        let sample=samples.filter(item => item.id == selection)[0]
        let sample_values=sample.sample_values
        let otu_ids=sample.otu_ids
        let otu_labels=sample.otu_labels
        let Lables=otu_ids.slice(0,10).map((id) => {return 'OTU '+id}).reverse()
        let Values=sample_values.slice(0,10).reverse()
        let HoverText=otu_labels.slice(0,10).reverse()

        // make horizontal bar chart
        var data =[
            {
                x:Values,
                y:Lables,
                type:'bar',
                text:HoverText,
                orientation:'h'
            }
        ]
        var layout=[
            {
                title:'OTUs by count'
            }
        ]
        Plotly.newPlot('bar',data,layout)
        // bubble chart
        var bubble=[
            {
                x:otu_ids,
                y:sample_values,
                mode:'markers',
                marker:{
                    color:otu_ids,
                    size:sample_values
                }
            }
        ]
        Plotly.newPlot('bubble',bubble)
})}
// demographics
function metadata(selection){
    d3.json(url).then((data)=>{
        let metadata=data.metadata
        let demographics=metadata.filter(item => item.id == selection)
        let box=d3.select('#sample-metadata')
        box.html('')
        for (key in demographics[0]){
            box.append('h5').text(`${key}:${demographics[0][key]}`)
        }
})}
function optionChanged(newSelection){
    metadata(newSelection)
    makecharts(newSelection)
}
function init(){
    d3.json(url).then((data)=>{
        let names=data.names
        // dropdown
        let dropdown=d3.select('#selDataset')
        dropdown.selectAll('option')
            .data(names)
            .enter()
            .append('option')
            .text(item => item)
            .property('value', item => item)
        // initial selection
        metadata(names[0])
        makecharts(names[0])
})}
init()