document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('search-input');
    const useFilter = document.getElementById('use-filter');
    const regionFilter = document.getElementById('region-filter');
    const typeFilter = document.getElementById('type-filter');
    const plantList = document.getElementById('plant-list');

    // Example plant details data
    const plants = [
        {
            id: '1',
            name: 'Echinacea',
            scientificName: 'Echinacea purpurea',
            description: ' A North American herb with pink-purple flowers, used to boost the immune system and shorten colds.',
            uses: ['enhance immune function', 'reduce the duration of colds and infections'],
            region: 'Native to North America',
            type: 'Herbaceous perennial',
            system: 'Ayurveda',
            image: 'images/Echinacea.jpg',
            tags: ['Immune Boosting', 'Cold Relief']
        },

        {
            id: '2',
            name: "Elderberry",
            scientificName: "Sambucus nigra",
            description: " A deciduous shrub with dark purple berries, valued for its antioxidant properties.",
            uses: ["boost the immune system", "alleviate cold and flu symptoms, and reduce inflammation"],
            region: 'Native to Europe',
            type: 'Deciduous shrub',
            system: "Ayurveda",
            image: "images/Elderberry.jpg",
            tags: ["AntiOxidant", "Flu Relief"]
        },
    
        {
            id: '3',
            name: "Astragalus",
            scientificName: "Astragalus membranaceus",
            description: "A leguminous herb with a long history in Chinese medicine, known for its immune-enhancing roots.",
            uses: ["Chinese medicine to strengthen the immune system", "and improve overall vitality"],
            region: 'Native to China, Mongolia, and Korea',
            type: 'Herbaceous perennial',
            system: "Ayurveda",
            image: "images/Astragalus.jpg",
            tags: ["Immune Enhancer", "Vitality Boost"]
        },
    
        {
            id: '4',
            name: "Turmeric",
            scientificName: "Curcuma longa",
            description: "A tropical rhizome with bright yellow flesh, containing curcumin for its anti-inflammatory benefits.",
            uses: ["anti-inflammatory and antioxidant properties", "support immune function"],
            region: 'Native to Southeast Asia',
            type: 'Herbaceous perennial',
            system: "Ayurveda",
            image: "images/Turmeric.jpg",
            tags: ["Anti Inflammtory", "Digestive Health"]
        },
    
        {
            id: '5',
            name: "Ginger",
            scientificName: "Zingiber officinale",
            description: "A spicy, aromatic rhizome used for digestive and anti-inflammatory benefits.",
            uses: ["Known for its anti-inflammatory and antioxidant properties", "ginger helps support the immune system and alleviate digestive issues"],
            region: 'Native to Southeast Asia',
            type: 'Herbaceous perennial',
            system: "Ayurveda",
            image: "images/Ginger.jpg",
            tags: ["DigestiveAid", "Anti Inflammtory"]
        },
    
        {
            id: '6',
            name: "Garlic",
            scientificName: "Allium sativum",
            description: "A bulbous plant known for its strong flavor and health benefits, including antimicrobial properties.",
            uses: ["support cardiovascular health", "combat infections"],
            region: 'Native to Central Asia and northeastern Iran',
            type: 'Bulbous perennial',
            system: "Ayurveda",
            image: "images/Garlic.jpg",
            tags: ["CardiovascularHealth", "Antimicrobial"]
        },
    
        {
            id: '7',
            name: "Andrographis",
            scientificName: "Andrographis paniculata",
            description: "An herb with green leaves and white flowers, used in traditional medicine for immune support.",
            uses: ["medicine to enhance immune response", "reduce fever, and treat respiratory infections"],
            region: 'Native to South Asian countries',
            type: 'Herbaceous annua',
            system: "Ayurveda",
            image: "images/Andrographis.jpg",
            tags: ["ImmuneSupport", "FeverReduction"]
        },
    
        {
            id: '8',
            name: "Aloe Vera",
            scientificName: "Scientific Name 8",
            description: "Known for its thick, fleshy leaves that contain a gel with hydrating and healing properties.",
            uses: ["Moisturizes skin", "soothes sunburn"],
            region: 'Native to the Arabian Peninsula',
            type: 'Succulent perennial',
            system: "Ayurveda",
            image: "images/Aloe Vera.jpg",
            tags: ["Moisturiser", "SoothingSkin"]
        },
    
        {
            id: '9',
            name: "Chamomile",
            scientificName: "Matricaria chamomilla",
            description: "Features small daisy-like flowers with soothing properties, often used in teas and topical treatments.",
            uses: ["Calms irritated skin", "reduces redness"],
            region: 'Native to Europe and Western Asia',
            type: 'Annual herb',
            system: "Ayurveda",
            image: "images/Chamomile.jpg",
            tags: ["Calming", "AntiInflammatory"]
        },
        
        {
            id: '10',
            name: "Tea Tree",
            scientificName: "Melaleuca alternifolia",
            description: "Produces essential oil with powerful antimicrobial properties, commonly used in acne treatments and skin care products.",
            uses: ["Treats acne", "reduces inflammation"],
            region: 'Native to Australia',
            type: 'Evergreen tree or shrub',
            system: "Ayurveda",
            image: "images/Tea Tree.jpg",
            tags: ["Antibacterial", "AcneTreatment"]
        }
    
        // Repeat for other plants
    ];

    function renderPlants(filteredPlants) {
        plantList.innerHTML = ''; // Clear existing plants

        // Check if there are plants to display
        if (filteredPlants.length === 0) {
            plantList.innerHTML = '<p>No plants found matching your criteria.</p>';
            return;
        }

        // Loop through each filtered plant and create a card
        filteredPlants.forEach(plant => {
            const plantCard = document.createElement('div');
            plantCard.className = 'plant-card';
            plantCard.innerHTML = `
                <img src="${plant.image}" alt="${plant.name}" class="plant-image">
                <div class="plant-info">
                    <h3 class="plant-name">${plant.name}</h3>
                    <p class="plant-description">
                        Use: ${plant.uses.join(', ')}, 
                        Region: ${plant.region}, 
                        Type: ${plant.type}
                    </p>
                    <a href="plant-detail.html?id=${plant.id}" class="view-more">View Details</a>
                </div>
            `;
            plantList.appendChild(plantCard);
        });
    }

    function filterPlants() {
        const searchTerm = searchInput.value.toLowerCase();
        const useValue = useFilter.value.toLowerCase();
        const regionValue = regionFilter.value.toLowerCase();
        const typeValue = typeFilter.value.toLowerCase();

        // Filter plants based on search criteria
        const filteredPlants = plants.filter(plant => {
            const matchesSearch = plant.name.toLowerCase().includes(searchTerm) || 
                                  plant.scientificName.toLowerCase().includes(searchTerm);

            const matchesUse = useValue === '' || 
                               plant.uses.some(use => use.toLowerCase() === useValue);

            const matchesRegion = regionValue === '' || 
                                  plant.region.toLowerCase() === regionValue;

            const matchesType = typeValue === '' || 
                                plant.type.toLowerCase() === typeValue;

            return matchesSearch && matchesUse && matchesRegion && matchesType;
        });

        renderPlants(filteredPlants);
    }

    // Event listeners for filters and search
    searchInput.addEventListener('input', filterPlants);
    useFilter.addEventListener('change', filterPlants);
    regionFilter.addEventListener('change', filterPlants);
    typeFilter.addEventListener('change', filterPlants);

    // Initial render of all plants
    renderPlants(plants);
});