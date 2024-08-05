import "./ContentStyle.css"
const MainContent = () => {
  return (
    <div className="container-fluid " style={{backgroundColor:"#3F3F3F"}}>
      <div className="row position-relative">
        <div className="col-md-12 text-center" style={{paddingLeft:0,paddingRight:0,position:"relative"}}>
            <div className="gradient"></div>
          <img src="src/assets/contentpic1.png" alt="Main" className="img-fluid main-image" />
          <div className="main-text">
            <h1 className="display-4">IOT TEAM</h1>
            <p className="lead1">ออกแบบ</p>
            <p className="lead2">Smart door locking system</p>
            <p className="lead3">คำบรรยาย</p>
            <p className="lead4">มีการสร้างเซิร์ฟเวอร์ไว้ใช้ตรวจสอบรหัสหลายๆ รหัส โดยจะมีการสแกนคิวอาร์โค้ดบนหน้าจอ LED และเมื่อต้องใส่แกนคิวอาร์โค้ดและใส่รหัสจึงจะปิดหน้าต่างสำเร็จ ระบบจะทำการเข้าสู่ระบบแบบพิเศษที่อนุญาตให้เข้าถึงได้</p>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="procBlock">
          
          <div className="procText">ภาพขั้นตอนทำงาน</div>
        </div>
      </div>
      <hr className="line"></hr>
      <div className="gallery-section">
        <div className="gallery-images">
          <img src="src/assets/pig1.png" alt="Step 1" className="img-fluid" />
          <img src="src/assets/pig2.png" alt="Step 2" className="img-fluid" />
          <img src="src/assets/pig3.png" alt="Step 3" className="img-fluid" />
          <img src="src/assets/pig4.png" alt="Step 4" className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default MainContent
