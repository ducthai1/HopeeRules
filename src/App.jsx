import React from 'react';
import { Ticket, Clock, UserPlus, AlertTriangle, Users, Info, Heart, ShieldCheck } from 'lucide-react';

// eslint-disable-next-line no-unused-vars
const RuleCard = ({ number, icon: Icon, title, children, isLast }) => {
  return (
    <div className="flex gap-4 md:gap-6 relative">
      {/* Cột Timeline bên trái */}
      <div className="flex flex-col items-center flex-shrink-0 w-12 md:w-16">
        {/* Số thứ tự nổi bật */}
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg md:text-xl shadow-lg border-3 md:border-4 border-blue-50 z-10 shrink-0">
          {number}
        </div>

        {/* Đường kẻ nối */}
        {!isLast && (
          <div className="w-0.5 md:w-1 bg-blue-200 flex-grow -mt-2 opacity-60 rounded-b-full"></div>
        )}
      </div>

      {/* Nội dung Card bên phải */}
      <div className="flex-grow pb-10 md:pb-12">
        <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm md:shadow-md border border-slate-100 hover:shadow-lg md:hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group cursor-grab active:cursor-grabbing">
          {/* Dải màu trang trí bên trái card */}
          <div className="absolute top-0 left-0 w-1 md:w-1.5 h-full bg-gradient-to-b from-blue-400 to-blue-600"></div>

          <div className="flex items-start gap-3 md:gap-4">
            <div className="p-2.5 md:p-3 bg-blue-50 text-blue-600 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 md:mb-3 flex items-center uppercase tracking-tight">
                {title}
              </h3>
              {/* Tăng line-height lên leading-loose để thoáng hơn */}
              <div className="text-slate-600 text-sm leading-loose font-medium">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center flex-shrink-0 w-12 md:w-16">
        {/* Khoảng trống để căn chỉnh với card bên phải */}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 font-sans py-8 md:py-12 px-3 md:px-8 select-none">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-slate-800 uppercase tracking-tight mb-2 text-shadow-sm leading-tight">
            Nội Quy <span className="text-blue-600">Hopee</span>
          </h1>
          <div className="h-1 w-20 md:w-24 bg-blue-500 mx-auto rounded-full mb-3"></div>
          <p className="text-slate-500 font-medium uppercase tracking-widest text-xs md:text-sm">
            Badminton Club Regulations
          </p>
        </div>

        {/* Danh sách nội quy dạng Timeline */}
        <div className="pl-0 md:pl-4">

          {/* 01. Vote & Đặt sân */}
          <RuleCard number="01" icon={Ticket} title="Vote & Đặt Sân">
            <p className="mb-4 text-slate-700">Số sân được đặt dựa trên lượng vote thực tế:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4 text-center leading-normal">
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <div className="text-xs text-slate-400 font-bold uppercase mb-1">0-3 Vote</div>
                <div className="text-lg font-black text-slate-500">0 Sân</div>
              </div>
              <div className="bg-blue-50 p-2.5 rounded-lg border border-blue-200">
                <div className="text-xs text-blue-500 font-bold uppercase mb-1">4-8 Vote</div>
                <div className="text-lg font-black text-blue-700">1 Sân</div>
              </div>
              <div className="bg-indigo-50 p-2.5 rounded-lg border border-indigo-200">
                <div className="text-xs text-indigo-500 font-bold uppercase mb-1">9-16 Vote</div>
                <div className="text-lg font-black text-indigo-700">2 Sân</div>
              </div>
              <div className="bg-violet-50 p-2.5 rounded-lg border border-violet-200">
                <div className="text-xs text-violet-500 font-bold uppercase mb-1">&gt;16 Vote</div>
                <div className="text-lg font-black text-violet-700">3 Sân</div>
              </div>
            </div>
            {/* Tăng khoảng cách dòng cho phần Lưu ý */}
            <div className="flex items-start gap-2 bg-amber-50 p-3 rounded-lg border border-amber-100 text-amber-800 text-xs leading-relaxed">
              <Info className="w-4 h-4 shrink-0 mt-1" />
              <span>Lưu ý: Quỹ công ty 2tr/tháng. Nếu vote tăng đột biến hoặc có cú "twist" làm biến động dẫn đến vượt quỹ, Host sẽ dựa trên chi phí phát sinh để thu thêm và chia đều.</span>
            </div>
          </RuleCard>

          {/* 02. Deadline */}
          <RuleCard number="02" icon={Clock} title="Thời Gian Chốt Vote">
            Hãy thể hiện sự chuyên nghiệp của chúng ta! Mọi người nhớ sắp xếp công việc và vote sớm trong vòng <span className="inline-block bg-blue-600 text-white px-2 py-0.5 rounded font-bold mx-1 shadow-sm my-1 md:my-0 leading-normal">48 giờ</span> (2 ngày) tính từ thời điểm mở vote để Host kịp giữ sân đẹp nhen.
          </RuleCard>

          {/* 03. Vé Vớt */}
          <RuleCard number="03" icon={UserPlus} title="Đăng Ký Bổ Sung (Vé Vớt)">
            <p className="mb-3">Nếu muốn tham gia nhưng lại hơi sát giờ chơi? Nhắn ngay lên group chung tag <b>@all</b> hoặc nhắn riêng với <b>Host</b> để hỏi nè.</p>
            <div className="space-y-2.5 text-sm bg-slate-50 p-3 rounded-lg border border-slate-200 leading-relaxed">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shrink-0"></div>
                <span>Còn sân: <b className="text-emerald-600">Luôn welcome mọi người tham gia ạ!</b></span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-purple-500 rounded-full shrink-0"></div>
                <span>Còn sân nhưng hết quỹ: <b className="text-purple-600">Host sẽ thu dựa theo tình hình</b></span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-rose-500 rounded-full shrink-0"></div>
                <span>Hết sân: <b className="text-rose-600">Mình hẹn nhau dịp sau nhé ạ :(</b></span>
              </div>
            </div>
          </RuleCard>

          {/* 04. Phạt */}
          <RuleCard number="04" icon={AlertTriangle} title="Chế Tài Xử Phạt (Hủy Kèo)">
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 leading-normal">
              <div className="flex-1 text-center bg-rose-50 p-3 rounded-xl border border-rose-100">
                <div className="text-xs text-rose-400 uppercase font-bold mb-1">Không báo lại với Host</div>
                <div className="text-xl font-black text-rose-600">100k</div>
              </div>
              <div className="flex-1 text-center bg-rose-50 p-3 rounded-xl border border-rose-100">
                <div className="text-xs text-rose-400 uppercase font-bold mb-1">Báo quá sát giờ (&lt;24h)</div>
                <div className="text-xl font-black text-rose-600">50k</div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-rose-400 italic leading-relaxed">"Chúng ta hãy đến một group chuyên nghiệp, không bùng kèo he!"</p>
          </RuleCard>

          {/* 05. Khách Mời */}
          <RuleCard number="05" icon={Users} title="Khách Mời (Vãng Lai)" isLast={true}>
            <div className="flex items-center justify-between bg-gradient-to-r from-teal-50 to-emerald-50 p-4 rounded-xl border border-teal-100 mb-2 leading-normal">
              <div className="text-center flex-1 border-r border-teal-200">
                <span className="block text-xs font-bold text-teal-500 uppercase mb-1">Nữ</span>
                <span className="block text-xl font-black text-teal-700">20-40k</span>
              </div>
              <div className="text-center flex-1">
                <span className="block text-xs font-bold text-teal-500 uppercase mb-1">Nam</span>
                <span className="block text-xl font-black text-teal-700">40-60k</span>
              </div>
            </div>
            <p className="text-center text-xs text-slate-400 italic leading-relaxed">Phí tùy thuộc vào tình hình sân hôm đó.</p>
          </RuleCard>
        </div>

        {/* Footer */}
        <div className="mt-8 md:mt-12 mb-6 md:mb-8 flex justify-center px-4">
          <div className="bg-white px-4 md:px-6 py-3 rounded-full shadow-md md:shadow-lg border border-blue-100 flex items-center gap-2 md:gap-3 text-center">
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-rose-500 fill-rose-500 animate-pulse shrink-0" />
            <span className="text-xs md:text-sm font-medium text-slate-600 italic leading-loose">Host sẽ luôn cân nhắc để xử lý linh hoạt dựa trên tình cảm & tình hình thực tế</span>
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-rose-500 fill-rose-500 animate-pulse shrink-0" />
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center pb-6 md:pb-8">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-blue-300 uppercase tracking-widest">
            <ShieldCheck size={14} className="shrink-0" /> Hopee Badminton Club 2025
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;