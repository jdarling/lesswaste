var React = require('react');
var Support = require('../lib/support');

var FOOD_WASTE_AVG = 1.8;
var MEAT_WASTE_AVG = 1.5;
var TREES_PER_TON = 5;
var TON = 2000;

var references = [
  'http://www.withouthotair.com/',
  'https://www.americanforests.org/assumptions-and-sources/#waste',
  'http://www.icbe.com/carbondatabase/CO2volumecalculation.asp',
  'http://www.carbonify.com/carbon-calculator.htm',
  'http://large.stanford.edu/courses/2012/ph240/micks2/',
];

var Page = React.createClass({
  getInitialState: function(){
    return {
      footprint: 0
    };
  },
  fieldChanged: function(){
    var waste = parseInt(Support.val(this.refs.waste.getDOMNode()))||0;
    var recycle = parseInt(Support.val(this.refs.recycle.getDOMNode()))||0;
    var footprint = (waste * 0.94) + (recycle * 0.6236);
    var couldaBeen = (waste + recycle) * 0.94;
    var savings = couldaBeen - footprint;
    this.setState({
      footprint: footprint,
      couldaBeen: couldaBeen,
      savings: savings,
    });
  },
  render: function(){
    var referencesList = references.map(function(ref){
      return <li key={ref}>
          <a href={ref} target="_blank">{ref}</a>
        </li>;
    });
    return (
      <div>
        <div>
          <div>
            Lbs Waste: <input type="number" ref="waste" onChange={this.fieldChanged} />
          </div>
          <div>
            Lbs Recycled: <input type="number" ref="recycle" onChange={this.fieldChanged} />
          </div>
          <div>
            Carbon Footprint: {this.state.footprint} CO2e<br />
            Could have been: {this.state.couldaBeen} CO2e<br />
            Savings: {this.state.savings} CO2e
          </div>
        </div>
        <h2>Waste</h2>
        <p>
          In 2009, the per capita generation of waste was 4.34 pounds per person
          per day and total waste generation was 243.0 million tons. U.S.
          Environmental Protection Agency, Municipal Waste, available at
          http://www.epa.gov/epawaste/nonhaz/municipal/index.htm and U.S.
          Environmental Protection Agency, Waste Facts, available at
          http://www.epa.gov/epawaste/facts-text.htm#chart1. However, EPA
          estimates that 1.46 lbs per day are recovered for recycling. U.S.
          Environmental Protection Agency, Municipal Solid Waste Generation,
          Recycling, and Disposal in the United States: Facts and Figures for 2009,
          available at http://www.epa.gov/waste/nonhaz/municipal/pubs/msw2009-fs.pdf.
          This means the average American produces – after recycling – 2.88 lbs of
          waste a day, 1051.2 lbs a year, and 87.6 lbs per month. Each pound of
          trash thrown away will emit approximately <strong>0.94</strong> pounds of CO2e in the
          form of methane. U.S. Environmental Protection Agency, Climate Change
          Emissions, available at http://www.epa.gov/climatechange/emissions/ind_home.html.
        </p>
        <h2>Recycling</h2>
        <p>
          The Environmental Protection Agency estimates that Americans recycle
          1.46 pounds each day or 532.9 lbs a year and 44.41 lbs each month.
          U.S. Environmental Protection Agency, Municipal Solid Waste Generation,
          Recycling, and Disposal in the United States: facts and Figures for
          2009, available at http://www.epa.gov/waste/nonhaz/municipal/pubs/msw2009-fs.pdf.
          According to WARM, the net emission reduction from recycling mixed recyclables
          (e.g., paper, metals, plastics), compared to a baseline in which the materials
          are landfilled 2.87 metric tons CO2e per short ton of waste recycled instead
          of landfilled. U.S. Environmental Protection Agency, Calculations and
          References: Tons of Waste Recycled instead of Landfilled, available at
          http://www.epa.gov/cleanenergy/energy-resources/refs.html. Using the
          savings of 2.87 metric tons of CO2e per 2,000 pounds of trash recycled
          (1 short ton = 2,000 pounds) or 0.001435 metric tons of CO2e per pound
          of recycled material. Then to produce the number of pounds of CO2e
          produced per pound of waste, I used 1 pound = 0.00045359237 metric
          tons determining that 0.3164 lbs of CO2e are save are saved per 1 lbs
          of trash recycled instead of landfilled. U.S. Environmental Protection
          Agency, Calculations and References: Tons of Waste Recycled instead of
          Landfilled, available at http://www.epa.gov/cleanenergy/energy-resources/refs.html
          using U.S. Environmental Protection Agency, WARM (2010), available at
          Waste Reduction Model (WARM). U.S. Environmental Protection Agency. As
          trash produces <strong>0.94</strong> pounds of CO2e per pound, we subtracted 0.3164 lbs
          showing that though it is better to recycle, it still produces <strong>0.6236 </strong>
          pounds of CO2e per pound of recycled material.
        </p>
        <h3>References</h3>
        <ul>
          {referencesList}
        </ul>
      </div>
    );
  }
});

module.exports = Page;
