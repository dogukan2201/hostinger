import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function RoomDetailPage() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md">
      <header className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-bold">Jakuzili Suite Oda</h2>
      </header>
      <div className="flex justify-center p-4">
        <ImageIcon className="w-12 h-12 text-muted-foreground" />
        <img src={"/assets/oda.png"} className="w-full h-full object-cover" />
      </div>

      <Tabs defaultValue="about" className="border-b">
        <TabsList className="flex justify-around">
          <TabsTrigger value="about">Oda Özellikleri</TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="p-4 text-black">
          <p>
            Modern şekilde dizayn edilen odamızda 1 adet çitf kişilik ve 1 adet
            tek kişilik yatak mevcuttur. En fazla 3 Yetişkin ve 1 çocuk
            konaklaması için uygundur. Odalarımız genel anlamda temiz ve
            kullanışlıdır. Odalarımız hakkında daha fazla bilgi almak için
            whatsApp numaramızdan bizlere ulaşabilir veya bizleri direk
            ayabilirsiniz.
          </p>
        </TabsContent>
      </Tabs>
      <div className="flex justify-between p-4 border-t">
        <div>
          <h2 className="font-bold text-black  text-3xl">2000/Gecelik</h2>
        </div>
        <Button className="bg-primary text-primary-foreground">
          Reservasyon Yap
        </Button>
      </div>
    </div>
  );
}

function ArrowLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ImageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}
