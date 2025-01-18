import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const recipes = [
  {
    title: "បុកល្ហុង", description:"Khmer cuisine. Our website is dedicated to bringing you traditional Khmer food recipes, passed down through generations, to inspire your cooking journey and celebrate the vibrant flavors of Cambodia.",date: "October 29, 2024", rating: 5.0, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/bok-lahong-3-FP.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients: [
      "ល្ហុង/ការ៉ុត",
      "ប៉េងប៉ោះ/សណ្ដែកកួរ",
      "ម្ទេស/ខ្ទឹមស",
      "បង្គារក្រៀម",
      "ម្សៅស៊ុប = 1 ស្លាបព្រាកាហ្វេ",
      "ទឹកក្រូចឆ្មារ = 3 ស្លាបព្រាបាយ",
      "ទឹកត្រី = 2 ស្លាបព្រាបាយ",
      "ស្ករត្នោត = 1 ស្លាបព្រាបាយពេញ"], 
    howToMake: "បុកខ្ទឹមស និងម្ទេសឲ្យម៉ត់បន្តិចរួចដាក់គ្រឿងមានដូចជាទឹកកាពិ ទឹកស្ករ ក្តាមប្រៃ ទឹកត្រី ម្សៅស៊ុប ទឹកក្រូចឆ្មា កូរច្របល់ចូលគ្នាអោយសព្វ ហើយភ្លក្សរសជាតិតាមការចូលចិត្ត។ថែមត្រប់ស្រួយ ប៉េងប៉ោះបុកបន្តិចទៀត ចាំដាក់ល្ហុង ការ៉ុត រួចបុកញុំៗ2-3ត្រលប់ជាការស្រេច។ពេលដួសញាំចាំថែមជីរណាតាមក្រោយ។"},
  {
    title: "Amok Fish", description: "Traditional steamed fish curry wrapped in banana leaves, bringing out authentic Cambodian flavors.", date: "October 10, 2024", rating: 4.8, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/3cea3fbd29f55db8bf138ca73f2f3ea1aa579569/Cambodian-Khmer-Fish-Amok-Recipe-square.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients: [
      "ត្រីរ៉ស់ ឬត្រីឆ្ដោរ ១គីឡូក្រាម",
      "ដូងទុំ ១",
      "ម្ទេសប្លោកក្រៀម ៥ផ្លែ",
      "ម្ទេសប្លោកទុំស្រស់ ៥ផ្លែ",
      "គល់ស្លឹកគ្រៃ ៥គល់",
      "ខ្ទឹមស ១០កំពឹស",
      "ម្សៅស៊ុប ១ភាគ២ស្លាបព្រាបាយ",
      "ទឹកត្រី ១ស្លាបព្រាបាយ",
      "សណ្ដែកដី ១០ក្រាម",
      "ស៊ុតទា ២គ្រាប់",
      "សម្បកក្រូចសើច ១ចំណិត",
      "ស្លឹកចេកណាំវ៉ាសម្រាប់ខ្ចប់ ៥ធាង",
      "ខ្ទឹមក្រហម ៥កំពឹស",
      "កាពិ ឬប្រហុកសាច់ ២ក្រាម",
      "ស្ករត្នោត ១ស្លាបព្រាបាយ",
      "អំបិល ១ភាគ២ស្លាបព្រាបាយ",
      "ស្លឹកក្រូចសើច ១០សន្លឹក",
      "ស្លឹកញ ឬស្លឹកកន្ទួត ១០ត្រួយ ឬច្រើនជាងនេះតាមចូលចិត្ត។"], 
    howToMake: 
    "ត្រីរ៉ស់ ឬត្រីឆ្ដោរ យកស្រកាចេញឲ្យស្អាត កាត់កន្ទុយ ចៀរព្រុយពោះ និងខ្នងចេញ ហើយកោសលាងទឹកឲ្យស្អាត កាត់ក្បាលចេញទុកមួយអន្លើ។ ក្បាលពុះជាពីរឆ្កឹះយកស្បែកក្រអូមលើចេញ លាងឲ្យស្អាត។ បើធំពេក អាចកាត់ជាដុំតូចៗល្មម។ ខ្លួនត្រី សើយយកឆ្អឹងខ្នងចេញ ហាន់ជាបន្ទះស្ដើងល្មម។គល់ស្លឹកគ្រៃហាន់ស្ដើង ម្ទេសប្លោកក្រៀម ខ្ទឹមស ខ្ទឹមក្រហម រំដេង ខ្ជាយ ល្មៀត សម្បកក្រូចសើច អំបិល បុកបញ្ចូលគ្នាឲ្យម៉ដ្ឋ ប្រហុកចិញ្ច្រាំឲ្យម៉ដ្ឋ ឬកាពិដាក់បុកជាមួយគ្រឿង។ សណ្ដែកដីលីងបុកឲ្យល្អិត។ស្លឹកក្រូចសើច ហូតទ្រនុងចោល លាងទឹកឲ្យស្អាត ហាន់ជាសរសៃល្អិតៗ។ដូងទុំ កោសពូតយកខ្ទិះដើមទុកដោយឡែក និងទឹកខ្ទិះទី២ ទុកដោយឡែក។ យកខ្ទិះដូងទី១ ពាក់កណ្ដាលបង់អំបិលបន្តិច(កុំឲ្យប្រៃ)។ដាក់សាច់ត្រី គ្រឿង សណ្ដែកដី កាពិ ឬប្រហុក ពងទា ទឹកខ្ទិះទីមួយដែលនៅសល់ ទឹកត្រី ស្ករ ម្សៅស៊ុប លាយច្របល់ចូលគ្នាកូរឲ្យសព្វ ចាក់ទឹកខ្ទិះទី២ចូល(ប្រយ័ត្នកុំឲ្យរាវពេក) បន្តកូរឲ្យទាល់តែឡើងខាប់ប្រហែល៣០នាទី ទុកមួយអន្លើសិន។ ស្លឹកញ កាត់ទ្រនុងចេញ ឬស្លឹកកន្ទួតលាងទឹកឲ្យស្អាត ដាក់ទ្រាប់បាតកន្ទោងច្រើន ឬតិចតាមចំណូលចិត្ត។ ដួសត្រីដែលកូរគ្រឿង រួចដាក់ក្នុងកន្ទោង(ឲ្យស្មើសាច់ស្មើគ្រឿង) ដួសទឹកខ្ទិះដើមចាក់ពីលើបន្តិច រោយស្លឹកក្រូចសើចដាក់ចំហុយឲ្យឆ្អិន(១៥ ឬ២០នាទី តាមទំហំតូចឬធំ)។"
  },
  {
    title: "Beef Lok Lak", description: "Sautéed beef with lime dipping sauce, served over rice.", date: "September 20, 2024", rating: 4.7, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/IMG_7636.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients: [
      "Papaya",
      "Garlic",
      "Chili",
      "Lime",
      "Fish sauce",
      "Sugar"], 
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh."},
  { 
    title: "Prahok Ktis", description: "A creamy fermented fish dip.", date: "August 5, 2024", rating: 4.9, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/IMG_8444-web.jpeg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"], howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh."},
  { 
    title: "Kuy Teav", description: "A popular noodle soup dish.", date: "July 22, 2024", rating: 4.5, 
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/01/19/FN_kuy-teav-deana-saukam_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1642608425658.webp", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"], 
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh." },
  { 
    title: "Num Banh Chok", description: "Cambodian rice noodles.", date: "June 18, 2024", rating: 4.6, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/Num-Banh-Chok-Khmer-1024x752.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"], 
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh." },
  { 
    title: "Chicken Samlor Machu", description: "Tangy soup with chicken.", date: "June 1, 2024", rating: 4.7, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/Screenshot-2023-05-23-at-8.29.40-AM-500x375.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"], 
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh." },
  { 
    title: "Bai Sach Chrouk", description: "Grilled pork with rice.", date: "May 19, 2024", rating: 4.8, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/images.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"], 
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh." },
  { 
    title: "Kralan", description: "Sticky rice in bamboo.", date: "May 1, 2024", rating: 4.4, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/IMG_8898-web-1600.jpg",
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"], 
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh." },
  { 
    title: "Khmer Red Curry", description: "Mild curry with coconut milk.", date: "April 15, 2024", rating: 4.5, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/13.-Cambodian-Red-Curry-Recipe-1.jpg2_.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"], 
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh." },
  { 
    title: "Cha Traop Dot", description: "Stir-fried eggplant with minced pork.", date: "April 2, 2024", rating: 4.8, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/images-1.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"], 
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh." },
  { 
    title: "Pumpkin Custard", description: "Sweet dessert served in pumpkins.", date: "March 25, 2024", rating: 4.6, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/img49436.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"], 
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh." },
  { 
    title: "Lap Khmer", description: "Khmer-style beef salad.", date: "March 10, 2024", rating: 4.7, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/lap-khmer-1-FP.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"],
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh." },
  { 
    title: "Fried Tarantulas", description: "Unique Cambodian delicacy.", date: "February 20, 2024", rating: 4.2, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/Skun_spiders_closeup.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"], 
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh." },
  { 
    title: "Nom Pang", description: "Cambodian baguette sandwich.", date: "February 5, 2024", rating: 4.5, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/images-2.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"], 
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh." },
  { 
    title: "Somlor Proher", description: "Vegetable soup.", date: "January 25, 2024", rating: 4.3, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/samlor-proher-trey-herbal.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"], 
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh." },
  { 
    title: "Prahet", description: "Fish patties.", date: "January 10, 2024", rating: 4.4, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/Cambodian-Fish-Cakes.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"], 
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh." },
  { 
    title: "Ang Dtray-Meuk", description: "Grilled squid.", date: "December 20, 2023", rating: 4.6, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/images-3.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"],
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh." },
  { 
    title: "Coconut Ice Cream", description: "Sweet coconut-based dessert.", date: "December 5, 2023", rating: 4.8, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/Coconut-Ice-Cream-Big-11.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"], 
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh." },
  { 
    title: "Sticky Rice with Mango", description: "Popular dessert in Cambodia.", date: "November 18, 2023", rating: 4.9, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/rainbow-mango-sticky-rice-sq.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"], 
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh." },
  { 
    title: "Bakben", description: "Popular dessert in Cambodia.", date: "November 18, 2023", rating: 4.9, 
    image: "https://raw.githubusercontent.com/sann-flwr/food/57e86469521834d7129f171c4caef5cc193b78d5/Bakben.jpg", 
    introduction: "Bok Lhong is a traditional Khmer dish, full of vibrant flavors and textures.", 
    ingredients:[
    "Papaya",
    "Garlic",
    "Chili",
    "Lime",
    "Fish sauce",
    "Sugar"], 
    howToMake: "Mix shredded papaya with garlic, chili, lime, fish sauce, and sugar. Serve fresh." },
  ];

const RecipeDetails = () => {
  const { title } = useParams(); // Get recipe title from route params
  const navigate = useNavigate(); // Hook to navigate back
  const recipe = recipes.find((r) => r.title === decodeURIComponent(title));

  if (!recipe) {
    return <div className="text-center text-red-600">Recipe not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        {/* Left Image Section */}
        <div className="flex items-center relative">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <span className="text-black text-xl">&larr;</span>
          </button>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Details Section */}
        <div className="bg-[#8B0000] text-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

          {/* Introduction */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p>{recipe.introduction}</p>
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* How to Make */}
          <div>
            <h2 className="text-xl font-semibold mb-2">How to make</h2>
            <p>{recipe.howToMake}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
