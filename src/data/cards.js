// Dữ liệu 78 lá Tarot (mock data – sau này thay bằng REST API Spring Boot).
// Shape: { id, slug, number, arcana, suit, name, vi, keywords[], upright, reversed, love, career, advice, themes[], motif }

const major = [
  ['the-fool', 0, 'The Fool', 'Chàng Khờ', ['khởi đầu', 'tự do', 'tin tưởng'], 'Một hành trình mới đang mở ra. Hãy bước đi với trái tim nhẹ nhàng và sự tò mò trong sáng.', 'Bốc đồng, thiếu chuẩn bị hoặc sợ hãi trước điều chưa biết khiến bạn chần chừ.', 'Một mối quan hệ mới đầy hứng khởi, hoặc cho phép bản thân yêu mà không đặt điều kiện.', 'Cơ hội mới, hướng đi mới. Thích hợp để thử sức dù chưa có đủ kinh nghiệm.', 'Tin vào bước đầu tiên. Bạn không cần thấy cả con đường mới được phép khởi hành.', ['Thay đổi', 'Tinh thần'], 'fool'],
  ['the-magician', 1, 'The Magician', 'Nhà Ảo Thuật', ['ý chí', 'sáng tạo', 'hiện thực hóa'], 'Bạn đang có đủ công cụ và năng lượng để biến ý tưởng thành hiện thực.', 'Năng lượng bị phân tán, tài năng chưa được dùng đúng chỗ hoặc thiếu trung thực.', 'Sự cuốn hút và chủ động trong tình cảm; hãy nói rõ điều bạn thật sự muốn.', 'Thời điểm tốt để trình bày ý tưởng, khởi động dự án và dùng kỹ năng của mình.', 'Tập trung một mục tiêu, rồi hành động. Mọi thứ bạn cần đã ở trong tay.', ['Sự nghiệp', 'Thay đổi'], 'magician'],
  ['the-high-priestess', 2, 'The High Priestess', 'Nữ Tư Tế', ['trực giác', 'bí ẩn', 'tĩnh lặng'], 'Câu trả lời nằm trong sự tĩnh lặng. Hãy lắng nghe tiếng nói nội tâm.', 'Bỏ qua trực giác, bí mật bị che giấu hoặc cảm xúc bị dồn nén.', 'Một kết nối sâu sắc không cần nhiều lời. Hãy lắng nghe cả những điều chưa nói.', 'Hãy quan sát thêm trước khi quyết định. Thông tin quan trọng chưa lộ diện hết.', 'Dành thời gian yên tĩnh mỗi ngày để nghe trái tim mình.', ['Tinh thần'], 'moon'],
  ['the-empress', 3, 'The Empress', 'Nữ Hoàng', ['nuôi dưỡng', 'dồi dào', 'dịu dàng'], 'Sự phong phú, chăm sóc và vẻ đẹp đang nở rộ quanh bạn.', 'Bỏ bê bản thân, phụ thuộc hoặc sự sáng tạo bị chững lại.', 'Tình yêu ấm áp, chăm sóc và gắn bó; có thể là dấu hiệu của sự viên mãn.', 'Dự án đang lớn dần. Môi trường làm việc nuôi dưỡng sự sáng tạo.', 'Hãy đối xử dịu dàng với bản thân như cách bạn chăm sóc người mình thương.', ['Tình yêu', 'Tài chính'], 'flower'],
  ['the-emperor', 4, 'The Emperor', 'Hoàng Đế', ['cấu trúc', 'quyền lực', 'ổn định'], 'Trật tự, kỷ luật và sự vững vàng giúp bạn xây nền móng bền chắc.', 'Cứng nhắc, kiểm soát quá mức hoặc thiếu kỷ luật.', 'Một mối quan hệ cần sự cam kết và ranh giới rõ ràng.', 'Vai trò lãnh đạo, lập kế hoạch dài hạn, xây dựng hệ thống.', 'Đặt ranh giới rõ ràng và giữ lời với chính mình.', ['Sự nghiệp', 'Tài chính'], 'throne'],
  ['the-hierophant', 5, 'The Hierophant', 'Giáo Hoàng', ['truyền thống', 'học hỏi', 'niềm tin'], 'Giá trị truyền thống và sự dẫn dắt của người đi trước mang lại điểm tựa.', 'Phá vỡ khuôn mẫu, nghi ngờ quy tắc cũ hoặc muốn tự tìm con đường riêng.', 'Cam kết nghiêm túc, giá trị chung, có thể hướng đến hôn nhân.', 'Học thêm, tìm người cố vấn, tuân theo quy trình đã được kiểm chứng.', 'Học từ người đi trước, nhưng đừng quên điều gì thật sự hợp với bạn.', ['Tinh thần', 'Sự nghiệp'], 'keys'],
  ['the-lovers', 6, 'The Lovers', 'Đôi Tình Nhân', ['lựa chọn', 'hòa hợp', 'tình yêu'], 'Một sự kết nối chân thành hoặc một lựa chọn quan trọng theo giá trị thật của bạn.', 'Mất cân bằng, do dự hoặc lựa chọn đi ngược giá trị bản thân.', 'Sự hòa hợp sâu sắc về cảm xúc và giá trị sống.', 'Quyết định liên quan đến đối tác hoặc con đường đúng với giá trị cá nhân.', 'Chọn điều khiến bạn thấy trọn vẹn, không phải điều khiến bạn thấy an toàn.', ['Tình yêu'], 'lovers'],
  ['the-chariot', 7, 'The Chariot', 'Cỗ Xe', ['quyết tâm', 'chiến thắng', 'kiểm soát'], 'Ý chí kiên định giúp bạn tiến về phía trước và vượt qua trở ngại.', 'Mất phương hướng, hiếu thắng hoặc thiếu động lực.', 'Chủ động theo đuổi, nhưng đừng biến tình cảm thành cuộc đua.', 'Tiến bộ nhanh nhờ kỷ luật và tập trung; mục tiêu rõ ràng.', 'Giữ cương thật vững: cân bằng giữa lý trí và cảm xúc.', ['Sự nghiệp', 'Thay đổi'], 'wheel'],
  ['strength', 8, 'Strength', 'Sức Mạnh', ['can đảm', 'kiên nhẫn', 'dịu dàng'], 'Sức mạnh thật sự đến từ sự mềm mỏng, kiên nhẫn và lòng trắc ẩn.', 'Tự ti, nghi ngờ bản thân hoặc cạn kiệt năng lượng.', 'Kiên nhẫn và thấu hiểu giúp mối quan hệ vượt qua khó khăn.', 'Đối mặt thử thách bằng sự bình tĩnh thay vì ép buộc.', 'Bạn mạnh mẽ hơn bạn nghĩ. Hãy dịu dàng với cả nỗi sợ của mình.', ['Tinh thần'], 'infinity'],
  ['the-hermit', 9, 'The Hermit', 'Ẩn Sĩ', ['nội tâm', 'tìm kiếm', 'ánh sáng'], 'Thời gian lui về, chiêm nghiệm và soi đường bằng ngọn đèn của chính mình.', 'Cô lập quá mức, trốn tránh hoặc từ chối sự giúp đỡ.', 'Cần khoảng lặng để hiểu chính mình trước khi mở lòng.', 'Làm việc độc lập, nghiên cứu sâu hoặc xem lại định hướng.', 'Một khoảng lặng không phải là lùi bước, mà là chuẩn bị cho bước đi sâu hơn.', ['Tinh thần'], 'lantern'],
  ['wheel-of-fortune', 10, 'Wheel of Fortune', 'Bánh Xe Số Phận', ['chu kỳ', 'vận may', 'thay đổi'], 'Vòng quay đang chuyển động. Một chu kỳ mới, thường là điều tích cực, sắp đến.', 'Trì hoãn thay đổi, vận rủi tạm thời hoặc cảm giác mất kiểm soát.', 'Duyên số đưa đẩy; mối quan hệ bước sang giai đoạn mới.', 'Cơ hội bất ngờ, thay đổi vị trí hoặc xu hướng thị trường.', 'Mọi chu kỳ đều qua. Hãy linh hoạt và đón nhận dòng chảy.', ['Thay đổi', 'Tài chính'], 'wheel'],
  ['justice', 11, 'Justice', 'Công Lý', ['công bằng', 'sự thật', 'cân bằng'], 'Sự thật và công bằng được làm rõ. Hành động của bạn mang lại hệ quả tương xứng.', 'Thiếu công bằng, né tránh trách nhiệm hoặc tự lừa dối.', 'Cần trung thực và cân bằng cho đi – nhận lại.', 'Hợp đồng, quyết định pháp lý hoặc đánh giá công bằng.', 'Hãy trung thực với chính mình trước tiên.', ['Sự nghiệp', 'Tinh thần'], 'scales'],
  ['the-hanged-man', 12, 'The Hanged Man', 'Người Treo Ngược', ['buông bỏ', 'góc nhìn mới', 'chờ đợi'], 'Tạm dừng để nhìn mọi thứ từ một góc khác. Buông bỏ để nhận lại.', 'Trì hoãn vô ích, hy sinh không cần thiết hoặc cố chấp.', 'Học cách nhìn từ phía người kia; kiên nhẫn chờ đúng thời điểm.', 'Dự án tạm dừng; hãy dùng thời gian này để xem xét lại.', 'Đôi khi dừng lại là cách nhanh nhất để thấy đường đi.', ['Thay đổi', 'Tinh thần'], 'hanged'],
  ['death', 13, 'Death', 'Cái Chết', ['kết thúc', 'chuyển hóa', 'tái sinh'], 'Một chương khép lại để chương mới có chỗ bắt đầu. Đây là sự chuyển hóa, không phải mất mát.', 'Níu kéo điều đã cũ, sợ thay đổi hoặc chuyển hóa bị trì hoãn.', 'Một giai đoạn kết thúc để mối quan hệ trưởng thành hoặc để bạn tự do.', 'Kết thúc một công việc hoặc mô hình cũ, mở ra hướng mới.', 'Cảm ơn điều đã qua, rồi nhẹ nhàng buông tay.', ['Thay đổi'], 'rose'],
  ['temperance', 14, 'Temperance', 'Điều Độ', ['cân bằng', 'chữa lành', 'hài hòa'], 'Sự điều hòa nhẹ nhàng. Hãy tìm điểm giữa và để mọi thứ hòa quyện.', 'Mất cân bằng, quá đà hoặc thiếu kiên nhẫn.', 'Một mối quan hệ hài hòa, tôn trọng và chữa lành.', 'Làm việc nhịp nhàng, hợp tác tốt và tránh cực đoan.', 'Từng chút một. Sự đều đặn quan trọng hơn sự bùng nổ.', ['Tinh thần'], 'twocups'],
  ['the-devil', 15, 'The Devil', 'Ác Quỷ', ['ràng buộc', 'cám dỗ', 'bóng tối'], 'Hãy nhìn vào những ràng buộc mà bạn đang tự đặt lên mình. Nhận ra là bước đầu để được tự do.', 'Giải thoát khỏi thói quen xấu hoặc mối quan hệ độc hại.', 'Sự ràng buộc hoặc ham muốn mạnh; cần đánh giá lại tính lành mạnh.', 'Công việc khiến bạn kiệt sức hoặc phụ thuộc vào vật chất.', 'Chìa khóa thật ra nằm trong tay bạn.', ['Tinh thần', 'Tài chính'], 'chain'],
  ['the-tower', 16, 'The Tower', 'Tòa Tháp', ['đổ vỡ', 'bừng tỉnh', 'giải phóng'], 'Điều không vững chắc sụp đổ để sự thật được phơi bày. Đau, nhưng giải phóng.', 'Tránh né biến cố, sợ hãi thay đổi hoặc hậu quả kéo dài.', 'Sự thật lộ ra khiến mối quan hệ rung chuyển; cần xây lại trên nền vững hơn.', 'Biến động bất ngờ, tái cấu trúc.', 'Sau cơn bão là bầu trời trong. Hãy xây lại trên nền thật.', ['Thay đổi'], 'tower'],
  ['the-star', 17, 'The Star', 'Ngôi Sao', ['hy vọng', 'chữa lành', 'cảm hứng'], 'Hy vọng trở lại. Sau những ngày mệt mỏi, một ánh sao dịu dàng soi đường.', 'Mất niềm tin, thất vọng hoặc cảm giác lạc hướng.', 'Tình yêu chân thành, chữa lành và tin tưởng.', 'Cảm hứng mới, định hướng dài hạn, danh tiếng tích cực.', 'Tin rằng bạn xứng đáng với điều tốt đẹp. Hãy cho mình hy vọng.', ['Tinh thần', 'Tình yêu'], 'star'],
  ['the-moon', 18, 'The Moon', 'Mặt Trăng', ['mơ hồ', 'cảm xúc', 'vô thức'], 'Mọi thứ chưa rõ ràng. Hãy đi chậm và tin vào cảm nhận nhưng đừng để nỗi sợ dẫn lối.', 'Sự thật dần sáng tỏ, nỗi lo âu giảm bớt.', 'Cảm xúc phức tạp, hiểu lầm hoặc điều chưa nói ra.', 'Thông tin chưa đầy đủ, nên chờ thêm trước khi quyết định lớn.', 'Đừng vội kết luận lúc đêm xuống. Ánh sáng sẽ đến.', ['Tinh thần', 'Tình yêu'], 'moon'],
  ['the-sun', 19, 'The Sun', 'Mặt Trời', ['niềm vui', 'thành công', 'rõ ràng'], 'Niềm vui, sự rõ ràng và năng lượng tích cực tràn đầy.', 'Lạc quan quá mức hoặc niềm vui tạm thời bị che mờ.', 'Hạnh phúc, cởi mở và chân thành.', 'Thành công, được công nhận, dự án nở hoa.', 'Cho phép mình tận hưởng niềm vui, bạn xứng đáng.', ['Sự nghiệp', 'Tình yêu'], 'sun'],
  ['judgement', 20, 'Judgement', 'Phán Xét', ['thức tỉnh', 'tha thứ', 'tiếng gọi'], 'Một tiếng gọi bên trong, thời điểm nhìn lại, tha thứ và bước sang tầng mới.', 'Tự phán xét khắt khe hoặc phớt lờ tiếng gọi.', 'Làm lành, tha thứ hoặc nhìn lại mối quan hệ một cách trung thực.', 'Đánh giá lại sự nghiệp và đi theo tiếng gọi thật sự.', 'Tha thứ cho phiên bản cũ của bạn, họ đã làm hết sức.', ['Thay đổi', 'Tinh thần'], 'trumpet'],
  ['the-world', 21, 'The World', 'Thế Giới', ['hoàn thành', 'viên mãn', 'trọn vẹn'], 'Một chu kỳ hoàn tất tốt đẹp. Bạn xứng đáng ăn mừng.', 'Còn dang dở, thiếu một mảnh cuối cùng.', 'Mối quan hệ trọn vẹn, hạnh phúc.', 'Hoàn thành mục tiêu lớn, mở rộng ra thế giới.', 'Hãy dừng lại và ghi nhận hành trình bạn đã đi.', ['Sự nghiệp', 'Thay đổi'], 'wreath'],
]

const suits = {
  wands: {
    vi: 'Gậy', en: 'Wands', element: 'Lửa', themes: ['Sự nghiệp', 'Thay đổi'], motif: 'wand',
    love: 'đam mê và sự chủ động', work: 'tham vọng và hành động',
    cards: [
      ['Ace', 'Át', ['khởi đầu', 'cảm hứng', 'tiềm năng'], 'Tia lửa của một ý tưởng hay đam mê mới.', 'Thiếu động lực, ý tưởng bị trì hoãn.'],
      ['Two', 'Hai', ['kế hoạch', 'lựa chọn', 'tầm nhìn'], 'Bạn đang đứng giữa kế hoạch và tương lai, sẵn sàng mở rộng tầm nhìn.', 'Sợ bước ra khỏi vùng an toàn.'],
      ['Three', 'Ba', ['mở rộng', 'chờ đợi', 'viễn cảnh'], 'Công sức bắt đầu cho kết quả; hãy kiên nhẫn nhìn xa.', 'Chậm trễ, kế hoạch bị cản trở.'],
      ['Four', 'Bốn', ['ăn mừng', 'ổn định', 'tổ ấm'], 'Một cột mốc đáng ăn mừng, sự ổn định và niềm vui chung.', 'Bất ổn nhỏ ở nhà hoặc cột mốc bị trì hoãn.'],
      ['Five', 'Năm', ['cạnh tranh', 'xung đột', 'va chạm'], 'Nhiều ý kiến va chạm; cạnh tranh lành mạnh có thể thúc đẩy bạn.', 'Tránh xung đột hoặc mâu thuẫn dần lắng xuống.'],
      ['Six', 'Sáu', ['chiến thắng', 'công nhận', 'tự tin'], 'Thành công và sự ghi nhận xứng đáng.', 'Cái tôi quá lớn hoặc thiếu sự công nhận.'],
      ['Seven', 'Bảy', ['bảo vệ', 'kiên định', 'lập trường'], 'Giữ vững lập trường dù bị thử thách.', 'Quá tải, muốn buông xuôi.'],
      ['Eight', 'Tám', ['tốc độ', 'tin tức', 'chuyển động'], 'Mọi việc diễn ra nhanh, tin tức hoặc cơ hội đến dồn dập.', 'Chậm trễ, hiểu lầm trong giao tiếp.'],
      ['Nine', 'Chín', ['bền bỉ', 'cảnh giác', 'hồi sức'], 'Bạn đã đi một chặng dài, còn một chút nữa thôi.', 'Kiệt sức, nghi ngại quá mức.'],
      ['Ten', 'Mười', ['gánh nặng', 'trách nhiệm', 'nỗ lực'], 'Gánh vác nhiều việc; hãy xem điều nào thật sự cần mang.', 'Buông bớt gánh nặng, học cách chia sẻ.'],
      ['Page', 'Tiểu Đồng', ['khám phá', 'nhiệt huyết', 'tin vui'], 'Nhiệt huyết của người mới và một tin tức thú vị.', 'Thiếu kiên nhẫn, ý tưởng nửa vời.'],
      ['Knight', 'Kỵ Sĩ', ['năng lượng', 'phiêu lưu', 'bốc đồng'], 'Hành động nhanh, đầy nhiệt huyết, nhưng cẩn thận kẻo vội vàng.', 'Nóng vội hoặc thiếu kiên định.'],
      ['Queen', 'Hoàng Hậu', ['tự tin', 'ấm áp', 'cuốn hút'], 'Sự tự tin ấm áp và sức hút tự nhiên.', 'Ghen tị hoặc thiếu tự tin tạm thời.'],
      ['King', 'Vua', ['lãnh đạo', 'tầm nhìn', 'quyết đoán'], 'Tầm nhìn lớn và khả năng dẫn dắt truyền cảm hứng.', 'Độc đoán hoặc kỳ vọng quá cao.'],
    ],
  },
  cups: {
    vi: 'Cốc', en: 'Cups', element: 'Nước', themes: ['Tình yêu', 'Tinh thần'], motif: 'cup',
    love: 'cảm xúc và sự kết nối', work: 'sự hài hòa trong công việc',
    cards: [
      ['Ace', 'Át', ['tình yêu mới', 'cảm xúc', 'cởi mở'], 'Trái tim mở ra đón nhận cảm xúc mới tràn đầy.', 'Cảm xúc bị dồn nén hoặc tình cảm chưa được đáp lại.'],
      ['Two', 'Hai', ['kết nối', 'hòa hợp', 'tôn trọng'], 'Sự kết nối cân bằng và tôn trọng lẫn nhau.', 'Mất cân bằng hoặc hiểu lầm giữa hai người.'],
      ['Three', 'Ba', ['tình bạn', 'ăn mừng', 'cộng đồng'], 'Niềm vui chia sẻ cùng bạn bè và người thân.', 'Ồn ào quá mức hoặc cảm thấy bị bỏ ngoài.'],
      ['Four', 'Bốn', ['chán nản', 'suy ngẫm', 'bỏ lỡ'], 'Bạn đang mải suy tư nên chưa thấy món quà trước mắt.', 'Thức tỉnh, sẵn sàng đón cơ hội mới.'],
      ['Five', 'Năm', ['tiếc nuối', 'mất mát', 'nhìn lại'], 'Nỗi buồn là có thật, nhưng vẫn còn điều quý giá phía sau.', 'Chấp nhận, bắt đầu chữa lành.'],
      ['Six', 'Sáu', ['hoài niệm', 'ký ức', 'ngây thơ'], 'Ký ức đẹp và sự ấm áp từ quá khứ trở về.', 'Mắc kẹt quá khứ, cần bước tiếp.'],
      ['Seven', 'Bảy', ['ảo mộng', 'lựa chọn', 'mơ mộng'], 'Nhiều lựa chọn đẹp đẽ; hãy phân biệt đâu là thật.', 'Sự rõ ràng đến, chọn đúng hướng.'],
      ['Eight', 'Tám', ['rời đi', 'buông bỏ', 'tìm ý nghĩa'], 'Rời điều không còn nuôi dưỡng bạn để tìm ý nghĩa sâu hơn.', 'Sợ ra đi hoặc lưỡng lự kéo dài.'],
      ['Nine', 'Chín', ['mãn nguyện', 'ước nguyện', 'hài lòng'], 'Điều ước thành sự thật, cảm giác hài lòng.', 'Thỏa mãn hời hợt hoặc ham muốn chưa đủ.'],
      ['Ten', 'Mười', ['viên mãn', 'gia đình', 'hạnh phúc'], 'Hạnh phúc trọn vẹn và sự gắn kết bền chặt.', 'Rạn nứt nhỏ trong mối quan hệ gia đình.'],
      ['Page', 'Tiểu Đồng', ['lãng mạn', 'tin vui', 'trực giác'], 'Một thông điệp dịu dàng hoặc tình cảm trong sáng.', 'Nhạy cảm quá mức hoặc ngây thơ.'],
      ['Knight', 'Kỵ Sĩ', ['lời mời', 'lãng mạn', 'mơ mộng'], 'Một lời đề nghị hay cử chỉ lãng mạn đang đến.', 'Hứa hẹn suông hoặc phi thực tế.'],
      ['Queen', 'Hoàng Hậu', ['thấu cảm', 'dịu dàng', 'trực giác'], 'Sự thấu cảm sâu sắc và biết lắng nghe.', 'Nhạy cảm quá mức, dễ tổn thương.'],
      ['King', 'Vua', ['điềm tĩnh', 'trưởng thành', 'cân bằng'], 'Cảm xúc trưởng thành và điềm tĩnh.', 'Kìm nén cảm xúc hoặc thao túng.'],
    ],
  },
  swords: {
    vi: 'Kiếm', en: 'Swords', element: 'Khí', themes: ['Tinh thần', 'Thay đổi'], motif: 'sword',
    love: 'giao tiếp và sự thật', work: 'tư duy và quyết định',
    cards: [
      ['Ace', 'Át', ['sự thật', 'rõ ràng', 'đột phá'], 'Một tia sáng của sự rõ ràng và sự thật.', 'Rối rắm hoặc thiếu rõ ràng.'],
      ['Two', 'Hai', ['do dự', 'bế tắc', 'cân nhắc'], 'Bạn đang tạm gác cảm xúc để cân nhắc, đừng né tránh quyết định mãi.', 'Quyết định cuối cùng được đưa ra.'],
      ['Three', 'Ba', ['đau lòng', 'tổn thương', 'buồn'], 'Nỗi đau cần được thừa nhận để có thể chữa lành.', 'Hồi phục, tha thứ dần đến.'],
      ['Four', 'Bốn', ['nghỉ ngơi', 'hồi phục', 'tĩnh tâm'], 'Hãy cho bản thân thời gian nghỉ ngơi.', 'Kiệt sức hoặc bắt đầu hồi phục.'],
      ['Five', 'Năm', ['xung đột', 'thắng thua', 'bất hòa'], 'Thắng lợi có thể để lại cái giá; chọn trận nào đáng đánh.', 'Làm lành hoặc rút lui đúng lúc.'],
      ['Six', 'Sáu', ['chuyển tiếp', 'bình yên', 'rời đi'], 'Bạn đang rời vùng nước động để đến nơi yên bình hơn.', 'Kháng cự thay đổi.'],
      ['Seven', 'Bảy', ['chiến lược', 'bí mật', 'tinh ranh'], 'Cần chiến lược khéo léo; cẩn trọng với sự thiếu trung thực.', 'Sự thật lộ ra hoặc lương tâm trỗi dậy.'],
      ['Eight', 'Tám', ['mắc kẹt', 'sợ hãi', 'tự giới hạn'], 'Cảm giác mắc kẹt phần lớn đến từ niềm tin trong đầu.', 'Giải thoát và nhìn ra lối đi.'],
      ['Nine', 'Chín', ['lo âu', 'trằn trọc', 'sợ hãi'], 'Nỗi lo ban đêm thường lớn hơn thực tế, hãy tìm sự hỗ trợ.', 'Lo âu dần nguôi.'],
      ['Ten', 'Mười', ['kết thúc', 'đáy vực', 'giải thoát'], 'Một giai đoạn đau đớn kết thúc, từ đây chỉ còn đi lên.', 'Hồi phục chậm nhưng chắc chắn.'],
      ['Page', 'Tiểu Đồng', ['tò mò', 'học hỏi', 'tin tức'], 'Tò mò và khao khát hiểu biết.', 'Nói nhiều hơn nghĩ hoặc lời nói thiếu cân nhắc.'],
      ['Knight', 'Kỵ Sĩ', ['quyết liệt', 'nhanh', 'thẳng thắn'], 'Hành động nhanh và thẳng thắn, hãy cẩn thận lời nói.', 'Vội vàng hoặc thiếu suy xét.'],
      ['Queen', 'Hoàng Hậu', ['sắc sảo', 'độc lập', 'rõ ràng'], 'Tư duy sắc sảo và giao tiếp rõ ràng.', 'Lạnh lùng hoặc khắt khe.'],
      ['King', 'Vua', ['trí tuệ', 'công bằng', 'lý trí'], 'Quyết định dựa trên lý trí và sự công bằng.', 'Áp đặt hoặc lạm dụng quyền lực.'],
    ],
  },
  pentacles: {
    vi: 'Tiền', en: 'Pentacles', element: 'Đất', themes: ['Tài chính', 'Sự nghiệp'], motif: 'coin',
    love: 'sự ổn định và cam kết', work: 'sự bền bỉ và tài chính',
    cards: [
      ['Ace', 'Át', ['cơ hội', 'khởi đầu', 'thịnh vượng'], 'Cơ hội vững chắc về tài chính hoặc sự nghiệp.', 'Cơ hội bị bỏ lỡ hoặc kế hoạch thiếu nền tảng.'],
      ['Two', 'Hai', ['cân bằng', 'linh hoạt', 'ưu tiên'], 'Khéo léo cân bằng nhiều việc cùng lúc.', 'Quá tải hoặc mất cân bằng.'],
      ['Three', 'Ba', ['hợp tác', 'kỹ năng', 'đội nhóm'], 'Làm việc nhóm cùng nhau tạo nên chất lượng.', 'Thiếu phối hợp hoặc kỹ năng chưa đủ.'],
      ['Four', 'Bốn', ['giữ chặt', 'an toàn', 'kiểm soát'], 'Bạn muốn giữ sự an toàn, nhưng đừng giữ quá chặt.', 'Buông bớt kiểm soát.'],
      ['Five', 'Năm', ['thiếu thốn', 'lo lắng', 'cô lập'], 'Giai đoạn khó khăn; hãy nhìn quanh, sự giúp đỡ vẫn hiện diện.', 'Phục hồi, tìm được hỗ trợ.'],
      ['Six', 'Sáu', ['cho đi', 'nhận lại', 'cân bằng'], 'Sự rộng lượng và cân bằng giữa cho và nhận.', 'Mất cân bằng cho đi.'],
      ['Seven', 'Bảy', ['kiên nhẫn', 'đánh giá', 'đầu tư'], 'Chờ đợi thành quả; hãy đánh giá tiến độ.', 'Sốt ruột hoặc nỗ lực chưa đúng hướng.'],
      ['Eight', 'Tám', ['chuyên cần', 'rèn luyện', 'tay nghề'], 'Chăm chỉ rèn luyện để tinh thông tay nghề.', 'Cầu toàn hoặc thiếu động lực.'],
      ['Nine', 'Chín', ['độc lập', 'thành quả', 'sang trọng'], 'Tự lập và tận hưởng thành quả của chính mình.', 'Phụ thuộc hoặc làm việc quá sức.'],
      ['Ten', 'Mười', ['di sản', 'gia đình', 'giàu có'], 'Sự ổn định lâu dài và nền tảng vững chắc.', 'Bất ổn tài chính hoặc mâu thuẫn gia đình.'],
      ['Page', 'Tiểu Đồng', ['học hỏi', 'tham vọng', 'cơ hội'], 'Một cơ hội học hỏi hoặc mục tiêu thực tế mới.', 'Thiếu tập trung hoặc ngại bắt đầu.'],
      ['Knight', 'Kỵ Sĩ', ['bền bỉ', 'chăm chỉ', 'đáng tin'], 'Tiến từng bước chắc chắn và đáng tin cậy.', 'Trì trệ hoặc quá cầu toàn.'],
      ['Queen', 'Hoàng Hậu', ['chu đáo', 'thực tế', 'nuôi dưỡng'], 'Chăm sóc thực tế và sự dồi dào ấm áp.', 'Lo toan quá nhiều, quên bản thân.'],
      ['King', 'Vua', ['thịnh vượng', 'an toàn', 'thành đạt'], 'Thành công vững chắc và khả năng quản lý tốt.', 'Tham vật chất hoặc cứng nhắc.'],
    ],
  },
}

const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI']

const majorCards = major.map(([slug, number, name, vi, keywords, upright, reversed, love, career, advice, themes, motif]) => ({
  id: slug, slug, number, numeral: number === 0 ? '0' : numerals[number - 1], arcana: 'major', suit: null,
  name, vi, keywords, upright, reversed, love, career, advice, themes, motif,
}))

const minorCards = Object.entries(suits).flatMap(([suitKey, suit]) =>
  suit.cards.map(([rank, viRank, keywords, upright, reversed], i) => {
    const slug = `${rank.toLowerCase()}-of-${suitKey}`
    const [k1, k2] = keywords
    return {
      id: slug, slug, number: i + 1, numeral: i < 10 ? String(i + 1) : rank[0], arcana: 'minor', suit: suitKey, rank,
      name: `${rank} of ${suit.en}`, vi: `${viRank} ${suit.vi}`,
      keywords, upright, reversed,
      love: `Trong tình yêu, lá bài nói về ${suit.love}. Điểm nhấn: ${k1} và ${k2}. ${upright}`,
      career: `Trong công việc, lá bài gắn với ${suit.work}. Hãy chú ý đến ${k1} và ${k2}.`,
      advice: `Nguyên tố ${suit.element} nhắc bạn: hãy giữ ${k1} làm kim chỉ nam và đón nhận ${k2} bằng trái tim cởi mở.`,
      themes: suit.themes, motif: suit.motif,
    }
  }),
)

export const CARDS = [...majorCards, ...minorCards]
export const SUITS = {
  major: { label: 'Major Arcana', vi: 'Ẩn Chính' },
  wands: { label: 'Wands', vi: 'Gậy' },
  cups: { label: 'Cups', vi: 'Cốc' },
  swords: { label: 'Swords', vi: 'Kiếm' },
  pentacles: { label: 'Pentacles', vi: 'Tiền' },
}
export const THEMES = ['Tình yêu', 'Sự nghiệp', 'Tài chính', 'Tinh thần', 'Thay đổi']
export const getCard = (id) => CARDS.find((c) => c.id === id)
export const groupOf = (c) => (c.arcana === 'major' ? 'major' : c.suit)
