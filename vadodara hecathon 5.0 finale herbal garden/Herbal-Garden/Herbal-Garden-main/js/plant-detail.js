document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const plantId = urlParams.get('id');
  
    // Example plant details data with diseases cured
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
            image: "images/elderberry.jpg",
            tags: ["AntiOxidant", "Flu Relief"],
            disease: ["Cold & Flu" , "Sinusitis" , "Bronchitis" , "Immune Support"]
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
            image: "images/astragalus.jpg",
            tags: ["Immune Enhancer", "Vitality Boost"],
            disease: ["Cold & Flu" , "Sinusitis" , "Bronchitis" , "Immune Support"]
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
            image: "images/turmeric.jpg",
            tags: ["Anti Inflammtory", "Digestive Health"],
            disease: ["Cold & Flu" , "Sinusitis" , "Bronchitis" , "Immune Support"]
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
            image: "images/ginger.jpg",
            tags: ["DigestiveAid", "Anti Inflammtory"],
            disease: ["Cold & Flu" , "Sinusitis" , "Bronchitis" , "Immune Support"]
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
            image: "images/garlic.jpg",
            tags: ["CardiovascularHealth", "Antimicrobial"],
            disease: ["Cold & Flu" , "Sinusitis" , "Bronchitis" , "Immune Support"]
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
            tags: ["ImmuneSupport", "FeverReduction"],
            disease: ["Cold & Flu" , "Sinusitis" , "Bronchitis" , "Immune Support"]
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
            image: "images/aloe vera.jpg",
            tags: ["Moisturiser", "SoothingSkin"],
            disease: ["Cold & Flu" , "Sinusitis" , "Bronchitis" , "Immune Support"]
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
            image: "images/chamomile.jpg",
            tags: ["Calming", "AntiInflammatory"],
            disease: ["Cold & Flu" , "Sinusitis" , "Bronchitis" , "Immune Support"]
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
            image: "images/tea tree.jpg",
            tags: ["Antibacterial", "AcneTreatment"],
            disease: ["Cold & Flu" , "Sinusitis" , "Bronchitis" , "Immune Support"]
        }
    
        // Repeat for other plants
    ];
  
    const plant = plants.find(p => p.id === plantId);
  
    if (plant) {
      document.querySelector('.plant-name').textContent = plant.name;
      document.querySelector('.plant-scientific-name').textContent = plant.scientificName;
      document.querySelector('.plant-description').textContent = plant.description;
      document.querySelector('.plant-uses').innerHTML = plant.uses.map(use => `<li>${use}</li>`).join('');
      document.querySelector('.plant-diseases').innerHTML = plant.disease.map(disease => `<li>${disease}</li>`).join('');
  
      // Update to include diseases cured section
    //   const diseasesList = document.querySelector('.plant-diseases');
    //   if (diseasesList) {
    //     diseasesList.innerHTML = plant.diseasesCured.map(disease => `<li>${disease}</li>`).join('');
    //   }
  
      document.querySelector('.plant-system').textContent = plant.system;
      document.querySelector('.plant-image').src = plant.image;
      document.querySelector('.plant-tags').innerHTML = plant.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    }
  });