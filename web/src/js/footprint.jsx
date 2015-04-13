var React = require('react');

var Page = React.createClass({
  render: function(){
    return (
      <div>
        <a href="https://www.americanforests.org/assumptions-and-sources/#waste" target="_blank">Source https://www.americanforests.org/assumptions-and-sources/</a>
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
      </div>
    );
  }
});

module.exports = Page;
