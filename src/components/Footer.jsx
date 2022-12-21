export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer class="bg-gray-900 text-white py-6">
      <div class="container mx-auto px-6">
        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-500">Copyright {year} Sayan Biswas</div>
          <div class="flex items-center">
            <a
              href="https://github.com/Dank-del/portfolio"
              class="text-gray-500 hover:text-white mr-4"
            >
              Source Code
            </a>
            {/* <a href="#" class="text-gray-500 hover:text-white">
              Privacy Policy
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
