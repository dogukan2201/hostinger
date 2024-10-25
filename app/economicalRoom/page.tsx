import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function RoomDetailPage() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 my-8">
      <header className="flex items-center justify-between p-4 border-b">
        <h2 className="text-2xl font-bold">Ekonomik Odası</h2>
      </header>

      <div className="flex flex-col md:flex-row gap-8 p-4">
        <div className="w-full md:w-2/3">
          <img
            src={"/jakuziPhoto/jakuzi3.jpg"}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="w-full md:w-1/3">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="flex">
              <TabsTrigger value="about">Oda Özellikleri</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="p-4 text-black">
              <p>
                Modern şekilde dizayn edilen odamızda 1 adet çift kişilik ve 1
                adet tek kişilik yatak mevcuttur. En fazla 3 yetişkin ve 1 çocuk
                konaklaması için uygundur. Odalarımız genel anlamda temiz ve
                kullanışlıdır. Odalarımız hakkında daha fazla bilgi almak için
                WhatsApp numaramızdan bizlere ulaşabilir veya bizleri direkt
                arayabilirsiniz.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="flex justify-between items-center p-4 border-t">
        <div>
          <h2 className="font-bold text-black text-3xl">2000₺ / Gecelik</h2>
        </div>
        <Button className="bg-primary text-primary-foreground">
          Rezervasyon Yap
        </Button>
      </div>
    </div>
  );
}
