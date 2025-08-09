import Breadcrumb from '@/components/Breadcrumb';


export default function FoodProductsPage() {
    return (
        <main className="min-h-screen p-6">
            <Breadcrumb />

            <h1 className="text-3xl font-bold text-blue-700 mb-4">Food Products</h1>

            <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li><strong>Groceries:</strong> Basmati Rice, Wheat Flour, Pulses, Dry Fruits, Sugar, Jaggery</li>
                <li><strong>Spices:</strong> Turmeric, Chili, Black Pepper, Cumin, Fennel, Garam Masala</li>
                <li><strong>Tea & Coffee:</strong> Assam, Darjeeling, Green Tea, Masala Chai, Instant Coffee</li>
                <li><strong>Food Flavours (Essence):</strong> Vanilla, Chocolate, Pineapple, Mango, Kesar, Rose, Strawberry, Pan, Elaichi</li>
            </ul>
        </main>
    );
}
