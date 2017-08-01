(function() {
    
    let $result = document.querySelector('#result');
    let $dot = document.querySelector('.btn.dot');
    let $multiply = document.querySelector('.btn.mul');
    let $divide = document.querySelector('.btn.divide');
    let $plus = document.querySelector('.btn.plus');
    let $minus = document.querySelector('.btn.minus');
    let $equal = document.querySelector('.btn.equal');
    let $clear = document.querySelector('.btn.clear');
    let $delete = document.querySelector('.btn.del');
    let $numbers = document.querySelectorAll('.btn.num')

    var calculator = {
        result: '0'
    };

    $dot.addEventListener('click',function() {
        setResult(calculator.result + '.');
    })

    $multiply.addEventListener('click',function() {
        setResult(calculator.result + '*');
    });

    $divide.addEventListener('click', function() {
        setResult(calculator.result + '/');
    });

    $plus.addEventListener('click', function() {
        setResult(calculator.result + '+');
    });

    $minus.addEventListener('click', function() {
        setResult(calculator.result + '-');    
    });

    $equal.addEventListener('click', function() {
        setResult(String(eval(calculator.result)));
    });

    $clear.addEventListener('click', function() {
        setResult('0');
    });

    $delete.addEventListener('click', function(){
        if (calculator.result.length == 1) {
            setResult.result('0');
        } else{
            setResult(calculator.result.slice(0, calculator.result.length - 1));
        }
    });

    for (let $number of $numbers) {
        $number.addEventListener('click', function(event) {
            var number = event.currentTarget.dataset.number;
            if (calculator.result === '0') {
                setResult(number);
            } else {
                setResult(calculator.result + number);
            }
        });
    }

    function setResult(value) {
        calculator.result = value;
        $result.innerText = value;
    }

    setResult('0');

    setResult(calculator.result = calculator.result.toFixed(6));

})();