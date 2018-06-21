{/* <table class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Razza</th>
            <th>Immagine</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
    </tbody>
</table> */}


$('#cerca').on('submit', function (e) {
    e.preventDefault(); //azzera l'azione del submit, e non ricarica la pagina
    var nome = this['ricerca'].value;
    disegnaAnimali('animali', nome);
})

$('#selectanimali').on('change', function (event) {
    var valore = event.target.value;
    // console.log(valore);
    disegnaAnimali(valore);
})



function disegnaAnimali(valore, nome = '') {
    fetch('http://localhost:3000/' + valore + '?nome=' + nome)
        .then(function (res) {
            return res.json();
        })
        .then(function (cani) {
            //console.log(gatti)
            var listaAnimali = $('#animali')
            listaAnimali.html('')
            var table = $('<table></table>').addClass('table');
            var thead = $('<thead></thead>')
            var trtitolo = $('<tr></tr>')
            var thid = $('<th></th>').html('#')
            var thnome = $('<th></th>').html('Nome')
            var thrazza = $('<th></th>').html('Razza')
            var thimmagine = $('<th></th>').html('Immagine')
            var tbody = $('<tbody></tbody>')

            table.appendTo(listaAnimali);
            thead.appendTo(table);
            tbody.appendTo(table);
            trtitolo.appendTo(thead);
            thid.appendTo(trtitolo);
            thnome.appendTo(trtitolo);
            thrazza.appendTo(trtitolo);
            thimmagine.appendTo(trtitolo);

            cani.forEach(animale => {

                var trcani = $('<tr></tr>').attr('data-id', animale.id)

                var tdid = $('<td></td>').html(animale.id)
                var tdnome = $('<td></td>').html(animale.nome)
                var tdrazza = $('<td></td>').html(animale.razza)
                var tdimmagine = $('<td></td>')
                var immagine = $('<img></img>').addClass('img-fluid').attr("src", animale.immagine).css('width', '150px')

                trcani.appendTo(tbody);
                tdid.appendTo(trcani);
                tdnome.appendTo(trcani);
                tdrazza.appendTo(trcani);
                tdimmagine.appendTo(trcani);
                immagine.appendTo(tdimmagine);

                trcani.on('click', function () {
                    var id = $(this).attr('data-id');
                    dettaglio(id);
                })
            });
        })
}

function dettaglio(id) {
    $('#animali').html('');
    fetch('http://localhost:3000/animali/' + id)
        .then(function (res) {
            return res.json();
            
        })
        .then(function (animale) {
            var listaAnimali = $('#animali')
            listaAnimali.html('')
            var table = $('<table></table>').addClass('table');
            var thead = $('<thead></thead>')
            var trtitolo = $('<tr></tr>')
            var thid = $('<th></th>').html('#')
            var thnome = $('<th></th>').html('Nome')
            var thrazza = $('<th></th>').html('Razza')
            var thimmagine = $('<th></th>').html('Immagine')
            var tbody = $('<tbody></tbody>')

            table.appendTo(listaAnimali);
            thead.appendTo(table);
            tbody.appendTo(table);
            trtitolo.appendTo(thead);
            thid.appendTo(trtitolo);
            thnome.appendTo(trtitolo);
            thrazza.appendTo(trtitolo);
            thimmagine.appendTo(trtitolo);

            var trcani = $('<tr></tr>').attr('data-id', animale.id)

            var tdid = $('<td></td>').html(animale.id)
            var tdnome = $('<td></td>').html(animale.nome)
            var tdrazza = $('<td></td>').html(animale.razza)
            var tdimmagine = $('<td></td>')
            var immagine = $('<img></img>').addClass('img-fluid').attr("src", animale.immagine).css('width', '150px')

            trcani.appendTo(tbody);
            tdid.appendTo(trcani);
            tdnome.appendTo(trcani);
            tdrazza.appendTo(trcani);
            tdimmagine.appendTo(trcani);
            immagine.appendTo(tdimmagine);
            
        })
    

}

disegnaAnimali('animali');



