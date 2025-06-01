import { Typography, Box, Stack } from "@mui/material";

export default function TermsOfUse() {
  return (
    <Box p={4}>
      <Stack spacing={2}>
        <Typography variant="h5" fontWeight="bold">
          XIN CHÀO MỪNG BẠN ĐẾN VỚI WEBSITE CỦA TẬP ĐOÀN SUN GROUP
        </Typography>

        <Typography>
          Nếu có bất kỳ câu hỏi nào về việc sử dụng website, mời bạn vào phần{" "}
          <strong>Liên Hệ - Phản Hồi</strong>. Tất cả các câu hỏi hoặc bình luận về website hay nội dung website sẽ
          được giải đáp bởi Bộ phận Trợ giúp thành viên của Sun Group.
        </Typography>

        <Typography>
          Để sử dụng website này, vui lòng đọc kỹ những <strong>Điều khoản sử dụng</strong> này một cách cẩn thận.
        </Typography>

        <Typography>
          Bạn chỉ có thể sử dụng website này một khi đã đồng ý và chấp thuận với các Điều khoản mà không có bất cứ sự giới hạn hay bảo lưu nào.
        </Typography>

        {/* 1. Khái niệm */}
        <Typography variant="h6" fontWeight={600}>
          1. Khái niệm
        </Typography>
        <Typography>
          <strong>Website</strong> là trang thông tin điện tử của tập đoàn Sun Group.{" "}
          <br />
          <strong>Điều khoản sử dụng</strong> chính là tài liệu này, hoặc có thể gọi là Điều khoản.{" "}
          <br />
          <strong>Tài nguyên</strong> là các thông tin, hình ảnh, tệp âm thanh, phim,... hay bất cứ thông tin và/hoặc tư liệu nào trên website này.{" "}
          <br />
          <strong>Người sử dụng</strong> là bất cứ ai có thể truy cập vào website này để sử dụng website và/hoặc tài nguyên trên website, trong Điều khoản có thể được gọi hay xưng hô là “Bạn”.
        </Typography>

        {/* 2. Quyền thay đổi nội dung điều khoản */}
        <Typography variant="h6" fontWeight={600}>
          2. Quyền thay đổi nội dung điều khoản
        </Typography>
        <Typography>
          Ngoài ra, khi sử dụng các dịch vụ cụ thể, bạn và Sun Group sẽ phụ thuộc vào các điều khoản bổ sung và bất kỳ hướng dẫn hay quy tắc nào áp dụng cho các dịch vụ đó. 
          Tất cả các hướng dẫn hay quy tắc đó theo đây đều được coi là một phần cấu thành tham chiếu tới Điều khoản sử dụng. 
          Nếu bất kỳ điều khoản nào trong Điều Khoản Sử Dụng xung đột với những điều khoản trong các hướng dẫn hoặc quy tắc, hoặc điều khoản bổ sung đó, 
          thì những điều khoản trong Thỏa Thuận này sẽ quyết định.
        </Typography>

        {/* 3. Quyền sở hữu trí tuệ */}
        <Typography variant="h6" fontWeight={600}>
          3. Quyền sở hữu trí tuệ
        </Typography>
        <Typography>
          Tất cả các tài nguyên trong website này thuộc quyền sở hữu của Sun Group và/hoặc người đăng ký của nó và được bảo vệ bởi Luật Sở hữu trí tuệ. 
          Bạn có quyền sử dụng website và/hoặc tài nguyên cho mục đích cá nhân hoặc nội bộ phi thương mại, 
          đồng thời nên trích dẫn nguồn và giữ nguyên đường link tới tài nguyên.
        </Typography>
        <Typography>
          Bất kỳ hành vi sao chép, sửa đổi, phân phối, tái xuất bản, hoặc sử dụng vào mục đích thương mại mà không có sự đồng ý bằng văn bản từ Sun Group đều bị nghiêm cấm.
        </Typography>

        {/* 4. Những điều bị nghiêm cấm */}
        <Typography variant="h6" fontWeight={600}>
          4. Sun Group không chấp nhận các hành vi sau:
        </Typography>
        <Box component="ul" pl={4}>
          <li>Chống phá nhà nước CHXHCN Việt Nam.</li>
          <li>Xâm phạm quyền riêng tư hoặc gây tổn hại cho người khác.</li>
          <li>Phạm pháp hình sự, gây rối trật tự công cộng.</li>
          <li>Truyền bá thông tin cá nhân của người khác mà không có sự đồng ý.</li>
          <li>Kinh doanh không được chấp thuận, như quảng cáo, đa cấp,...</li>
          <li>Phát tán virus, gây hại đến thiết bị khác.</li>
          <li>Sử dụng robot/spiders để thu thập dữ liệu website trái phép.</li>
          <li>Xâm phạm hoạt động của website.</li>
          <li>Bất kỳ hành vi nào vi phạm pháp luật hoặc bị coi là không phù hợp.</li>
        </Box>

        {/* 5. Loại trừ trách nhiệm */}
        <Typography variant="h6" fontWeight={600}>
          5. Loại trừ trách nhiệm
        </Typography>
        <Typography>
          Khi sử dụng website này, bạn đồng ý chấp nhận những rủi ro tiềm ẩn:
        </Typography>
        <Box component="ul" pl={4}>
          <li>Sun Group không đảm bảo tuyệt đối về độ chính xác hoặc tính đầy đủ của thông tin.</li>
          <li>Website có thể chứa virus hoặc thành phần gây hại khác.</li>
          <li>Các dịch vụ có thể bị hoãn hoặc ngừng mà không cần thông báo.</li>
          <li>Sản phẩm/dịch vụ được giới thiệu không nhất thiết có hiệu lực tại mọi thời điểm.</li>
          <li>Sun Group không chịu trách nhiệm về nội dung tại website liên kết bên ngoài.</li>
        </Box>
      </Stack>
    </Box>
  );
}
