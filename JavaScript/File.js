    selectValue = (value) => {
        let rowdata = "../JSON/Data.json";
        for(let i=0;i<value.length;i++){
            rowdata += '<option>'+value[i]+'</option>'
        }
        document.getElementById('table').innerHTML = rowdata;
    }
