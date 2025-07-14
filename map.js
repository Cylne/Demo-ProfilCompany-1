document.addEventListener('DOMContentLoaded', function() {
    // Initialize Interactive Map
    // In a real implementation, this would use a proper map library like Google Maps API or Leaflet.js
    const coverageMap = document.querySelector('.coverage-map');
    
    if (coverageMap) {
        // This is a placeholder for actual map implementation
        console.log('Map area initialized. In production, this would show an interactive world map with highlighted service areas.');
        
        // For demo purposes, we'll just add a click event to the map image
        coverageMap.addEventListener('click', function() {
            alert('In the full implementation, this would be an interactive map showing our shipping coverage areas.');
        });
    }
    
    // Country selection interaction
    const countrySelect = document.getElementById('country');
    if (countrySelect) {
        countrySelect.addEventListener('change', function() {
            if (this.value === 'other') {
                const otherCountry = prompt('Mohon sebutkan negara tujuan Anda:');
                if (otherCountry) {
                    alert(`Kami akan memeriksa ketersediaan layanan untuk ${otherCountry} dan menghubungi Anda segera.`);
                }
            }
        });
    }
});