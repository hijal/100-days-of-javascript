var before = false;

$('#selected-condition').change(function (e) {
	if (e.target.value === 'before') {
		before = true;
	} else {
		before = false;
	}
});

function deleteRowCol(index) {
	let n = $(index).parent().parent().index();
	let obj = $('#testTable');

	obj.find('tr').each(function (k, e) {
		if (k == 0) {
			$(e).find('th').eq(n).hide('slow').remove();
		} else {
			$(e).find('td').eq(n).hide('slow').remove();
		}
	});
}

function addRowCol(ind) {
	let clicked = $(ind);
	let cell = clicked.closest('th');
	let table = clicked.closest('table');
	let index = cell.prop('cellIndex');

	let pointOpts = `<div class="th-path-name">
                <select name="" id="">
                    <option value="">AA</option>
                    <option value="">BB</option>
                    <option value="">CC</option>
                </select>
                <span class="remove" onclick="deleteRowCol(this)">[x]</span>
                <span class="add" onclick="addRowCol(this)">[+]</span>
            </div>`;
	let timesOpts = `<select>
                <option value="">10 AM</option>
                <option value="">10 AM</option>
                <option value="">10 AM</option>
            </select>`;
	let th = $('<th />').append(pointOpts);
	let td = $('<td />').append(timesOpts);

	if (before) {
		table.find('tr > :nth-child(' + (index + 1) + ')').before(function () {
			return $(this).is('th') ? th.clone(true) : td.clone(true);
		});
	} else {
		table.find('tr > :nth-child(' + (index + 1) + ')').after(function () {
			return $(this).is('th') ? th.clone(true) : td.clone(true);
		});
	}
}
