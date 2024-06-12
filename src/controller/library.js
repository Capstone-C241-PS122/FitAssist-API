const prisma = require("../prisma");

const createLibrary = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Video ID is required" });
    }

    // Fetch video details from video table
    const video = await prisma.video.findUnique({
      where: {
        id: id,
      },
    });

    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    const postLibraryVid = await prisma.library.create({
      data: {
        vidId: id,
        name_exercise: video.name_exercise,
        url_video: video.url_video,
        bodypart: video.bodypart,
        name_equipment: video.name_equipment,
      },
    });

    res.status(201).json({
      message: "Video disimpan ke Library",
      postLibraryVid,
    });
  } catch (error) {
    console.error("Gagal menyimpan ke Library:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


/*
const createLibrary = async (req, res) => {
  try {
    const{id} = req.body;
    const postLibraryVid = await prisma.library.create({
      data: {id},
    });
    res.status(201).json({
      message: "Video disimpan ke Library",
      postLibraryVid,
    });
  }catch (error) {
    console.error("Gagal menyimpan ke Library:", error);
    res.status(500).json({ error: "Internal server error"});
  }
};
*/


// const createLibrary = async (req, res) => {
//   try {
//     const {type,vidId} = req.body;

//     const postLibrary = await prisma.library.create({
//       data: {type, vidId},
//     });
//     res.status(201).json({
//       message: "Disimpan ke Library",
//       postLibrary,
//     });
//   }catch (error) {
//       console.error("Gagal menyimpan ke Library:", error);
//       res.status(500).json({ error: "Internal server error" });
//   }
// };

//modif shay
// const createLibrary = async (req, res) => {
//   try {
//     const { vidId, articleId } = req.body;
//     let type;
    
//     if (vidId && articleId) {
//       return res.status(400).json({ error: "Please provide either vidId or articleId, not both." });
//     } else if (vidId) {
//       type = "video";
//     } else if (articleId) {
//       type = "article";
//     } else {
//       return res.status(400).json({ error: "Please provide either vidId or articleId." });
//     }

//     const postLibrary = await prisma.library.create({
//       data: {
//         type,
//         vidId: vidId || null,       // Use vidId if provided, otherwise null
//         articleId: articleId || null // Use articleId if provided, otherwise null
//       },
//     });

//     res.status(201).json({
//       message: "Disimpan ke Library",
//       postLibrary,
//     });
//   } catch (error) {
//     console.error("Gagal menyimpan ke Library:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
//akhir modif

// //modif 3
// const createLibrary = async (req, res) => {
//   try {
//     const { vidId, articleId } = req.body;
//     let type;

//     if ((vidId && articleId) || (!vidId && !articleId)) {
//       return res.status(400).json({ error: "Please provide either vidId or articleId, not both, and only one." });
//     } else if (vidId) {
//       type = "video";
//     } else if (articleId) {
//       type = "article";
//     }

//     const postLibrary = await prisma.library.create({
//       data: {
//         type,
//         vidId: vidId || null,       // Use vidId if provided, otherwise null
//         articleId: articleId || null // Use articleId if provided, otherwise null
//       },
//     });

//     res.status(201).json({
//       message: "Disimpan ke Library",
//       postLibrary,
//     });
//   } catch (error) {
//     console.error("Gagal menyimpan ke Library:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// //end modif 3

const getAllLibraries = async (req, res) => {
  try {
    const libraries = await prisma.library.findMany();
    res.json(libraries);
  } catch (error) {
    console.error("Gagal menampilkan Library:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteLibrary = async (req, res) => {
  try {
    const { id_library } = req.params;
    await prisma.library.delete({ where: { id_library: parseInt(id_library) } });
    res.json({ message: "Dihapus" });
  } catch (error) {
    console.error("Gagal menghapus:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


module.exports = {
  createLibrary,
  getAllLibraries,
  deleteLibrary, //done
};
