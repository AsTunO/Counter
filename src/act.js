var a  = window.document.getElementById('bt1')

            a.addEventListener('click',click)
            a.addEventListener('mouseenter',down)
            a.addEventListener('mouseout',out)

        function click() {
            
            a.style.background = 'White'
            a.style.color = 'Black'

            let vs = window.document.getElementById('ip1')
            let ve = window.document.getElementById('ip2')
            let vt = window.document.getElementById('ip3')
            let res = window.document.getElementById('d1')

            if (vs.value.length == 0 || ve.value.length == 0 || vt.value.length == 0 ){
                window.alert('Missing Elements')
                res.innerHTML = ('Mistake')
            }else{
                
                res.innerHTML = (`Counting  \u{2714} <br> `)
                res.innerHTML += (`  \u{1F4CD}`)

                let Nvs = Number(vs.value)
                let Nve = Number(ve.value)
                let Nvt = Number(vt.value)

                if (Nvt <= 0){
                    window.alert('Invalid Step , [Now Step = 1]')
                    Nvt = 1
                }
                
                //Crescente
                if ( Nvs < Nve ){
                    for (let counter = Nvs ; counter <= Nve ; counter += Nvt ){
                        res.innerHTML += (` ${counter} \u{27A1} `)
                    }
                    

                //Decrescente
                }else{
                    for (let counter = Nvs ; counter >= Nve ; counter -= Nvt ){
                        res.innerHTML += (` ${counter} \u{27A1} `)
                    }
                    

                }
                res.innerHTML += (`\u{1F6A9}`)

                
            }

        }
        function down(){
            
            a.style.color = 'Green'
        }
        function out(){
            

            a.style.background = 'Black'
            a.style.color = 'yellow'
        }
