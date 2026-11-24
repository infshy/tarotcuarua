// Spreads, kiến thức, thông điệp ngày – mock data.

export const SPREADS = [
  {
    id: 'one', title: 'One Card Reading', vi: 'Một lá bài', count: 1, motif: 'sun', card: 'the-sun',
    desc: 'Một thông điệp ngắn gọn, rõ ràng cho khoảnh khắc hiện tại.',
    hint: 'Phù hợp khi bạn cần một lời nhắc nhẹ nhàng cho hôm nay.',
    positions: [{ name: 'Thông điệp', note: 'Điều vũ trụ muốn nhắn nhủ bạn lúc này.' }],
  },
  {
    id: 'ppf', title: 'Past – Present – Future', vi: 'Quá khứ – Hiện tại – Tương lai', count: 3, card: 'wheel-of-fortune',
    desc: 'Nhìn lại dòng chảy của câu chuyện từ nguồn cội đến hướng đi.',
    hint: 'Phù hợp khi bạn muốn hiểu bức tranh toàn cảnh.',
    positions: [
      { name: 'Quá khứ', note: 'Những ảnh hưởng đã hình thành nên tình huống này.' },
      { name: 'Hiện tại', note: 'Năng lượng bạn đang đối diện lúc này.' },
      { name: 'Tương lai', note: 'Hướng đi có thể mở ra nếu bạn tiếp tục như hiện tại.' },
    ],
  },
  {
    id: 'love', title: 'Love Reading', vi: 'Trải bài tình yêu', count: 3, card: 'the-lovers',
    desc: 'Lắng nghe trái tim bạn, trái tim người ấy và sợi dây kết nối.',
    hint: 'Dành cho những câu hỏi về tình cảm và các mối quan hệ.',
    positions: [
      { name: 'Bạn', note: 'Cảm xúc và nhu cầu thật sự của bạn trong mối quan hệ.' },
      { name: 'Người ấy', note: 'Năng lượng và góc nhìn từ phía bên kia.' },
      { name: 'Kết nối', note: 'Điều đang nối hai người và hướng đi của mối quan hệ.' },
    ],
  },
  {
    id: 'career', title: 'Career Reading', vi: 'Trải bài sự nghiệp', count: 3, card: 'the-emperor',
    desc: 'Soi sáng vị trí hiện tại, thử thách và con đường phía trước.',
    hint: 'Dành cho công việc, học tập và các quyết định nghề nghiệp.',
    positions: [
      { name: 'Hiện tại', note: 'Bạn đang đứng ở đâu trong sự nghiệp.' },
      { name: 'Thử thách', note: 'Điều cần vượt qua hoặc nhìn lại.' },
      { name: 'Hướng đi', note: 'Lời gợi ý cho bước tiếp theo.' },
    ],
  },
]

export const DAILY_MESSAGES = {
  energy: ['Dịu dàng và hướng nội', 'Sáng tạo và cởi mở', 'Vững vàng và bình tĩnh', 'Lấp lánh hy vọng', 'Chậm rãi và chữa lành'],
  notice: ['Lắng nghe cơ thể khi bạn mệt', 'Chú ý những điều nhỏ bé đang đến', 'Nói ra điều bạn thật sự cần', 'Đừng vội kết luận khi cảm xúc đang dâng', 'Dành vài phút hít thở trước khi quyết định'],
}

export const KNOWLEDGE = [
  { id: 'what', title: 'Tarot là gì?', tag: 'Khởi đầu', read: '3 phút', excerpt: 'Một bộ 78 lá bài như tấm gương để bạn soi chiếu suy nghĩ và cảm xúc.', body: ['Tarot là bộ bài gồm 78 lá, bắt nguồn từ châu Âu thế kỷ 15 và ban đầu dùng để chơi. Về sau, người ta dùng chúng như một công cụ chiêm nghiệm.', 'Với nhiều người, Tarot không phải là lời tiên đoán, mà là một tấm gương: hình ảnh trên lá bài giúp bạn gọi tên điều đang nằm trong lòng.', 'Hãy xem mỗi lá bài như một lời gợi mở, không phải một bản án.'] },
  { id: 'arcana', title: 'Major và Minor Arcana', tag: 'Cấu trúc', read: '4 phút', excerpt: '22 lá Ẩn Chính kể về hành trình lớn, 56 lá Ẩn Phụ nói về đời sống thường ngày.', body: ['Major Arcana gồm 22 lá, từ The Fool đến The World. Chúng thể hiện những bài học và bước ngoặt lớn của đời người.', 'Minor Arcana gồm 56 lá chia thành bốn bộ: Gậy, Cốc, Kiếm và Tiền, mô tả những chuyện thường ngày như công việc, cảm xúc, suy nghĩ và vật chất.', 'Khi nhiều lá Major xuất hiện, hãy lưu ý: có thể đây là giai đoạn quan trọng.'] },
  { id: 'suits', title: 'Bốn bộ bài và bốn nguyên tố', tag: 'Cấu trúc', read: '4 phút', excerpt: 'Lửa, Nước, Khí, Đất, mỗi nguyên tố là một vùng của đời sống.', body: ['Gậy (Lửa): đam mê, hành động, sáng tạo.', 'Cốc (Nước): cảm xúc, tình yêu, trực giác.', 'Kiếm (Khí): tư duy, giao tiếp, sự thật.', 'Tiền (Đất): vật chất, công việc, sự ổn định.'] },
  { id: 'reversed', title: 'Lá bài ngược nghĩa là gì?', tag: 'Thực hành', read: '3 phút', excerpt: 'Lá ngược không có nghĩa là xấu, nó là một sắc thái khác của cùng năng lượng.', body: ['Khi một lá bài xuất hiện ngược, năng lượng của nó thường bị chặn, bị trì hoãn hoặc đang chuyển vào bên trong.', 'Hãy thử hỏi: điều gì đang cản mình thể hiện năng lượng này? Lá ngược thường là lời mời nhìn sâu hơn.'] },
  { id: 'question', title: 'Cách đặt câu hỏi tốt', tag: 'Thực hành', read: '2 phút', excerpt: 'Câu hỏi mở thường mang lại thông điệp sâu sắc hơn câu hỏi có/không.', body: ['Thay vì "Anh ấy có yêu mình không?", hãy thử "Mình cần hiểu điều gì về mối quan hệ này?".', 'Câu hỏi bắt đầu bằng "như thế nào" hay "điều gì" giúp bạn giữ quyền chủ động với cuộc sống của mình.'] },
  { id: 'ritual', title: 'Nghi thức nhỏ trước khi trải bài', tag: 'Thực hành', read: '2 phút', excerpt: 'Ba hơi thở sâu, một câu hỏi rõ ràng và một không gian yên tĩnh.', body: ['Chọn một nơi yên tĩnh, thắp nến hoặc bật đèn dịu nhẹ nếu bạn thích.', 'Hít thở sâu ba lần, nghĩ về câu hỏi, rồi xáo bài theo nhịp của riêng bạn.', 'Sau khi đọc xong, hãy viết ra cảm nhận của mình vào nhật ký.'] },
]

export const SOCIALS = ['Instagram', 'Facebook', 'TikTok', 'YouTube']
