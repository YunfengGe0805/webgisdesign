document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('pointform');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const ptName = document.querySelector('input[name="ptName"]').value.trim();
        const ptNorth = parseFloat(document.querySelector('input[name="ptNorth"]').value.trim());
        const ptEast = parseFloat(document.querySelector('input[name="ptEast"]').value.trim());
        const remark = document.querySelector('textarea[name="remark"]').value.trim();
        
        if (ptName === '') {
            alert('Name must be filled out');
            return;
        }
		
        if (ptNorth === '') {
            alert('Northing must be filled out');
            return;
        }
		
        if (ptEast === '') {
            alert('Easting must be filled out');
            return;
        }
        
        if (!(ptNorth >= 800000 && ptNorth <= 848000)) {
            alert('Invalid value - Northing');
            return;
        }

        if (!(ptEast >= 800000 && ptEast <= 860000)) {
            alert('Invalid value - Easting');
            return;
        }
        
        alert('All required fields are entered correctly!');
    });
});
