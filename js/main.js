(function () {

  function setUpDesmos(calcNode) {
    var calculator = Desmos.Calculator(calcNode,
      {
        keypad: false,
        graphpaper: true,
        expressions: true,
        settingsMenu: false,
        zoomButtons: false,
        expressionsTopbar: true,
        solutions: true,
        border: true,
        lockViewport: false
      }
    );
    calculator.setState(
      {
        graph: {
          showGrid: true,
          polarMode: false,
          showXAxis: true,
          showYAxis: true,
          xAxisStep: 0,
          yAxisStep: 0,
          degreeMode: false,
          xAxisArrows: 'none',
          yAxisArrows: 'none',
          xAxisLabel: '',
          yAxisLabel: '',
          xAxisNumbers: true,
          yAxisNumbers: true,
          polarNumbers: true,
          projectorMode: false,
          squareAxes: true,
          viewport: {
            xmin: 0.0,
            ymin: -5.0,
            xmax: 4.0,
            ymax: 5.0
          }
        },
        expressions: {
          list: [
            {
              id: 'graph1',
              latex: 'p=A\\cdot\\cos\\left(t\\cdot\\sqrt{\\frac{k}{m}}\\right)+B\\cdot\\sin\\left(t\\cdot\\sqrt{\\frac{k}{m}}\\right)',
              domain: {
                min: 0,
                max: 1
              },
              hidden: false,
              color: '#4F81BD',
              style: 'normal',
              residualVariable: '',
              regressionParameters: {}
            }, {
              id: 'A',
              latex: 'A=1',
              domain: {
                min: 0,
                max: 1
              },
              hidden: false,
              color: '#000000',
              style: 'normal',
              residualVariable: '',
              regressionParameters: {},
              sliderMin: -10,
              sliderMax: 10,
              sliderHardMin: false,
              sliderHardMax: false,
              sliderAnimationPeriod: 8000,
              sliderPlayDirection: 1,
              sliderIsPlaying: false
            }, {
              id: 'B',
              latex: 'B=1',
              domain: {
                min: 0,
                max: 1
              },
              hidden: false,
              color: '#000000',
              style: 'normal',
              residualVariable: '',
              regressionParameters: {},
              sliderMin: -10,
              sliderMax: 10,
              sliderHardMin: false,
              sliderHardMax: false,
              sliderAnimationPeriod: 8000,
              sliderPlayDirection: 1,
              sliderIsPlaying: false
            }, {
              id: 'm',
              latex: 'm=1',
              domain: {
                min: 0,
                max: 1
              },
              hidden: false,
              color: '#9BBB59',
              style: 'normal',
              residualVariable: '',
              regressionParameters: {},
              sliderMin: -10,
              sliderMax: 10,
              sliderHardMin: false,
              sliderHardMax: false,
              sliderAnimationPeriod: 8000,
              sliderPlayDirection: 1,
              sliderIsPlaying: false
            }, {
              id: 'k',
              latex: 'k=10',
              domain: {
                min: 0,
                max: 1
              },
              hidden: false,
              color: '#8064A2',
              style: 'normal',
              residualVariable: '',
              regressionParameters: {},
              sliderMin: -10,
              sliderMax: 10,
              sliderHardMin: false,
              sliderHardMax: false,
              sliderAnimationPeriod: 8000,
              sliderPlayDirection: 1,
              sliderIsPlaying: false
            }
          ]
        }
      }
    );
    return calculator;
  }

  function main() {
    var calcNode = document.getElementById('calculator');
    calcNode.innerHTML = '';
    window.calculator = setUpDesmos(calcNode); // Useful to call window.calculator.getState() when developing.
  }

  main();
})();
