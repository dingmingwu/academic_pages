import { _ as _imports_0, a as _imports_1, b as _imports_4$1, c as _imports_5$1, d as _imports_6, e as _imports_7, f as _imports_8, E as ElImage, g as ElRow, h as ElCol } from "./fonts-FA0wcNt6.js";
import { _ as _imports_3 } from "./virtual_public-BRi5M4s0.js";
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _imports_2 } from "./virtual_public-CytPWqqp.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash-unified";
import "../server.mjs";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "pinia";
import "defu";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "destr";
import "klona";
import "@vue/shared";
import "cookie-es";
import "ohash";
const _imports_4 = publicAssetsURL("/image/icon_fold.png");
const _imports_5 = publicAssetsURL("/image/icon_open.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "chan",
  __ssrInlineRender: true,
  setup(__props) {
    const showGroup2 = ref(false);
    const showjr = ref(false);
    const showcpc = ref(false);
    const activetab = ref(1);
    const teachingcard = ref(0);
    const setActiveTab = (id) => {
      activetab.value = id;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_image = ElImage;
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg" }, _attrs))} data-v-efdc73de><div class="top" data-v-efdc73de><div class="topcontainer" data-v-efdc73de><div class="tname" data-v-efdc73de>Tsz Nam Chan (Edison)</div><div class="tintro" data-v-efdc73de>Distinguished Professor<br data-v-efdc73de>College of Computer Science and Software Engineering Shenzhen University</div><div class="tlocation" data-v-efdc73de><img${ssrRenderAttr("src", _imports_0)} alt="" class="icon_address" data-v-efdc73de><span class="locationtext" data-v-efdc73de>Zhiteng Building 618-3</span></div><div class="temail" data-v-efdc73de><img${ssrRenderAttr("src", _imports_1)} alt="" class="icon_email" data-v-efdc73de><span class="emailtext" data-v-efdc73de>edisonchan2013928@gmail.com</span><span class="emailtext2" data-v-efdc73de>edisonchan@szu.edu.cn</span></div><img${ssrRenderAttr("src", _imports_2)} alt="" class="teacherimg" data-v-efdc73de></div></div><p class="text" data-v-efdc73de> Tsz Nam Chan (Edison) is currently a Distinguished Professor in the database group of the Big Data Institude in Shenzhen University (SZU). He is a data engineering researcher (for handling the efficiency issues in big data settings). He published several research papers in prestigious conferences and journals (CCF: A, top ranking in Google scholar and Microsoft) in both database (data engineering) and data mining areas, including SIGMOD, VLDB, ICDE, SIGKDD, and TKDE. Prior to joining the SZU, he was a Research Assistant Professor in the Hong Kong Baptist University from Sep 2020 to Aug 2023 and a postdoctoral researcher in the The University of Hong Kong from Sep 2018 to Aug 2020. He received the PhD degree in computing and the BEng degree in electronic and information engineering from The Hong Kong Polytechnic University in 2019 and 2014, respectively. He is an IEEE senior member, an ACM member, and an AAAI member.</p><div class="research" data-v-efdc73de><div class="rtitle" data-v-efdc73de><img${ssrRenderAttr("src", _imports_3)} alt="" class="rellipse" data-v-efdc73de><p class="title" data-v-efdc73de>Research</p><div class="rline1" data-v-efdc73de></div><div class="rline2" data-v-efdc73de></div></div><p class="ri" data-v-efdc73de>Research Interests</p><div class="rifield" data-v-efdc73de><div class="rectangle1" data-v-efdc73de></div><div class="rectangle2" data-v-efdc73de></div><div class="rectangle3" data-v-efdc73de></div><div class="rectangle4" data-v-efdc73de></div><p class="ritext" data-v-efdc73de> Algorithm and software development for statistical models (with non-trivial accuracy and time complexity guarantees)<br data-v-efdc73de> Spatial and temporal data analysis/management (develop efficient algorithms for GIS)<br data-v-efdc73de> Large-scale data visualization<br data-v-efdc73de> Kernel methods, similarity measures, similarity search, and pattern matching </p></div><p class="Long-Term-Goal" data-v-efdc73de>Long-Term Goal</p><p class="ltgtext" data-v-efdc73de> My long-term goal aims to develop the GIS, visualization, statistical, and machine learning software packages, like QGIS, ArcGIS, CrimeStat, Seaborn, Scikit-learn, Scipy, and LIBSVM, which are based on our theoretically efficient algorithms (e.g., reduce the time complexity) with non-trivial accuracy guarantees (e.g., achieve exact results or approximate results with approximation ratio). With the lower time complexity of our solutions, our software packages should be the fastest in the world. </p><p class="Selected-projects" data-v-efdc73de>Selected projects</p><p class="sptext" data-v-efdc73de> My general research area is data management. Recently, much of my research concerns problems from geo-textual, geo-social network, and knowledge graph data, including data modeling, query languages, query processing, data mining, and indexing. </p><div class="group" data-v-efdc73de><p class="gtitle" data-v-efdc73de>LARGE: A Length-Aggregation-based Grid Structure for Line Density Visualization</p><p class="gintro" data-v-efdc73de>Line Density Visualization (LDV) is an important operation of geospatial analysis, which has been extensively used in many application domains, e.g., urban planning, criminology, and transportation science. However, LDV is computationally demanding. Therefore, existing exact solutions are not scalable (or even not feasible) to support large-scale datasets and high resolution sizes for generating LDV. To handle the efficiency issues, we develop the first solution to approximately compute LDV with an 𝜖-relative error guarantee, which consists of two main parts. First, we develop the new indexing structure, called length-aggregation-based grid structure (LARGE). Second, based on LARGE, we develop two types of fast bound functions, namely (1) square-shaped lower and upper bound functions and (2) arbitrary-shaped lower and upper bound functions, which can filter a large portion of unnecessary computations. By theoretically analyzing the tightness of our bound functions and experimentally comparing our solution with existing exact solutions on four large-scale datasets, we demonstrate that our solution can be scalable to generate high-resolution LDVs using large-scale datasets. In particular, our solution achieves up to 291.8x speedups over the state-of-the-art solutions. </p><div style="${ssrRenderStyle({ "display": "flex" })}" class="gimgs" data-v-efdc73de><div class="image-container" data-text="Click to view" data-v-efdc73de>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: `/academicpage/image/pro1_1.png`,
        fit: "cover",
        alt: "",
        class: "gimg1",
        "preview-src-list": ["/academicpage/image/pro1_1.png"]
      }, null, _parent));
      _push(`</div><div class="image-container" data-text="Click to view" data-v-efdc73de>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: `/academicpage/image/pro1_2.png`,
        fit: "cover",
        alt: "",
        class: "gimg2",
        "preview-src-list": ["/academicpage/image/pro1_2.png"]
      }, null, _parent));
      _push(`</div></div></div><div class="group2" data-v-efdc73de><p class="gtitle" data-v-efdc73de>LION: Fast and High-Resolution Network Kernel Density Visualization</p><p class="gintro" data-v-efdc73de>Network Kernel Density Visualization (NKDV) has often been used in a wide range of applications, e.g., criminology, transportation science, and urban planning. However, NKDV is computationally expensive, which cannot be scalable to large-scale datasets and high resolution sizes. Although a recent work, called aggregate distance augmentation (ADA), has been developed for improving the efficiency to generate NKDV, this method is still slow and does not take the resolution size into account for optimizing the efficiency. In this paper, we develop a new solution, called LION, which can reduce the worst-case time complexity for generating high-resolution NKDV, without increasing the space complexity. Experiment results on four large-scale location datasets verify that LION can achieve 2.86x to 35.36x speedup compared with the stateof-the-art ADA method. </p><div style="${ssrRenderStyle({ "display": "flex" })}" class="gimgs" data-v-efdc73de><div class="image-container" data-text="Click to view" data-v-efdc73de>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: `/academicpage/image/pro2_1.png`,
        fit: "cover",
        alt: "",
        class: "gimg1",
        "preview-src-list": ["/academicpage/image/pro2_1.png"]
      }, null, _parent));
      _push(`</div><div class="image-container" data-text="Click to view" data-v-efdc73de>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: `/academicpage/image/pro2_2.png`,
        fit: "cover",
        alt: "",
        class: "gimg2",
        "preview-src-list": ["/academicpage/image/pro2_2.png"]
      }, null, _parent));
      _push(`</div></div></div>`);
      if (showGroup2.value) {
        _push(`<div class="group3" data-v-efdc73de><p class="gtitle" data-v-efdc73de>Fast Network K-function-based Spatial Analysis</p><p class="gintro" data-v-efdc73de>Network K-function has been the de facto operation for analyzing point patterns in spatial networks, which is widely used in many communities, including geography, ecology, transportation science, social science, and criminology. To analyze a location dataset, domain experts need to generate a network K-function plot that involves computing multiple network K-functions. However, network K-function is a computationally expensive operation that is not feasible to support large-scale datasets, let alone to generate a network K-function plot. To handle this issue, we develop two efficient algorithms, namely count augmentation (CA) and neighbor sharing (NS), which can reduce the worst-case time complexity for computing network K-functions. In addition, we incorporate the advanced shortest path sharing (ASPS) approach into these two methods to further lower the worst-case time complexity for generating network K-function plots. Experiment results on four large-scale location datasets (up to 7.33 million data points) show that our methods can achieve up to 165.85x speedup compared with the state-of-the-art methods. </p><div style="${ssrRenderStyle({ "display": "flex" })}" class="gimgs" data-v-efdc73de><div class="image-container" data-text="Click to view" data-v-efdc73de>`);
        _push(ssrRenderComponent(_component_el_image, {
          src: `/academicpage/image/pro3_1.png`,
          fit: "cover",
          alt: "",
          class: "gimg1",
          "preview-src-list": ["/academicpage/image/pro3_1.png"]
        }, null, _parent));
        _push(`</div><div class="image-container" data-text="Click to view" data-v-efdc73de>`);
        _push(ssrRenderComponent(_component_el_image, {
          src: `/academicpage/image/pro3_2.png`,
          fit: "cover",
          alt: "",
          class: "gimg2",
          "preview-src-list": ["/academicpage/image/pro3_2.png"]
        }, null, _parent));
        _push(`</div><div class="image-container" data-text="Click to view" data-v-efdc73de>`);
        _push(ssrRenderComponent(_component_el_image, {
          src: `/academicpage/image/pro3_3.png`,
          fit: "cover",
          alt: "",
          class: "gimg3",
          "preview-src-list": ["/academicpage/image/pro3_3.png"]
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showGroup2.value) {
        _push(`<div class="group4" data-v-efdc73de><p class="gtitle" data-v-efdc73de>SLAM: Efficient Sweep Line Algorithms for Kernel Density Visualization</p><p class="gintro" data-v-efdc73de>Kernel Density Visualization (KDV) has been extensively used in a wide range of applications, including traffic accident hotspot detection, crime hotspot detection, disease outbreak detection, and ecological modeling. However, KDV is a computationally expensive operation, which is not scalable to large datasets (e.g., million-scale data points) and high resolution sizes (e.g., 1920 × 1080). To significantly improve the efficiency for generating KDV, we develop two efficient Sweep Line AlgorithMs (SLAM), which can theoretically reduce the time complexity for generating KDV. By incorporating the resolution-aware optimization (RAO) into SLAM, we can further achieve the lowest time complexity for generating KDV. Our extensive experiments on four large-scale real datasets (up to 4.33 million data points) show that all our methods can achieve one to two-order-of-magnitude speedup in many test cases and efficiently support KDV with exploratory operations (e.g., zooming and panning) compared with the state-of-the-art solutions.</p><div style="${ssrRenderStyle({ "display": "flex" })}" class="gimgs" data-v-efdc73de><div class="image-container" data-text="Click to view" data-v-efdc73de>`);
        _push(ssrRenderComponent(_component_el_image, {
          src: `/academicpage/image/pro4_1.png`,
          fit: "cover",
          alt: "",
          class: "gimg1",
          "preview-src-list": ["/academicpage/image/pro4_1.png"]
        }, null, _parent));
        _push(`</div><div class="image-container" data-text="Click to view" data-v-efdc73de>`);
        _push(ssrRenderComponent(_component_el_image, {
          src: `/academicpage/image/pro4_2.png`,
          fit: "cover",
          alt: "",
          class: "gimg2",
          "preview-src-list": ["/academicpage/image/pro4_2.png"]
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p style="${ssrRenderStyle({ "display": "flex", "margin-top": "24px", "height": "30px", "line-height": "30px", "color": "#2F81FC", "font-weight": "400", "font-size": "14px" })}" data-v-efdc73de><button class="toggle-button" data-v-efdc73de>${ssrInterpolate(showGroup2.value ? "FOLD" : "If you want to view more projects, please click MORE")} `);
      if (showGroup2.value) {
        _push(`<img${ssrRenderAttr("src", _imports_4)} alt="" class="tbbutton2" data-v-efdc73de>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_5)} alt="" class="tbbutton" data-v-efdc73de>`);
      }
      _push(`</button></p></div><div class="achievement" data-v-efdc73de><img${ssrRenderAttr("src", _imports_4$1)} alt="" class="aellipse" data-v-efdc73de><p class="atitle" data-v-efdc73de>Achievements</p><div class="aline1" data-v-efdc73de></div><div class="aline2" data-v-efdc73de></div><div class="achievements" data-v-efdc73de>`);
      _push(ssrRenderComponent(_component_el_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_col, {
              span: 2,
              xs: 0
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_col, {
              span: 8,
              xs: 24
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="abuttons" data-v-efdc73de${_scopeId2}><button class="${ssrRenderClass([{ "selecttab": activetab.value === 1 }, "abutton"])}" data-v-efdc73de${_scopeId2}>Research Awards</button><button class="${ssrRenderClass([{ "selecttab": activetab.value === 2 }, "abutton"])}" data-v-efdc73de${_scopeId2}>Research Grants</button><button class="${ssrRenderClass([{ "selecttab": activetab.value === 3 }, "abutton"])}" data-v-efdc73de${_scopeId2}>Research Publications</button><button class="${ssrRenderClass([{ "selecttab": activetab.value === 4 }, "abutton"])}" data-v-efdc73de${_scopeId2}>Patents</button><button class="${ssrRenderClass([{ "selecttab": activetab.value === 5 }, "abutton"])}" data-v-efdc73de${_scopeId2}>Tutorials</button><button class="${ssrRenderClass([{ "selecttab": activetab.value === 6 }, "abutton"])}" data-v-efdc73de${_scopeId2}>Demo Publications</button></div><div class="dblp" data-v-efdc73de${_scopeId2}><a href="https://dblp.org/pid/166/7652.html" target="_blank" style="${ssrRenderStyle({ "color": "#2F81FC" })}" data-v-efdc73de${_scopeId2}>[DBLP]</a>  <a href="https://scholar.google.com.hk/citations?user=b2AOUEEAAAAJ&amp;hl=en" target="_blank" style="${ssrRenderStyle({ "color": "#2F81FC" })}" data-v-efdc73de${_scopeId2}>[Google Scholar]</a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "abuttons" }, [
                      createVNode("button", {
                        class: ["abutton", { "selecttab": activetab.value === 1 }],
                        onClick: ($event) => setActiveTab(1)
                      }, "Research Awards", 10, ["onClick"]),
                      createVNode("button", {
                        class: ["abutton", { "selecttab": activetab.value === 2 }],
                        onClick: ($event) => setActiveTab(2)
                      }, "Research Grants", 10, ["onClick"]),
                      createVNode("button", {
                        class: ["abutton", { "selecttab": activetab.value === 3 }],
                        onClick: ($event) => setActiveTab(3)
                      }, "Research Publications", 10, ["onClick"]),
                      createVNode("button", {
                        class: ["abutton", { "selecttab": activetab.value === 4 }],
                        onClick: ($event) => setActiveTab(4)
                      }, "Patents", 10, ["onClick"]),
                      createVNode("button", {
                        class: ["abutton", { "selecttab": activetab.value === 5 }],
                        onClick: ($event) => setActiveTab(5)
                      }, "Tutorials", 10, ["onClick"]),
                      createVNode("button", {
                        class: ["abutton", { "selecttab": activetab.value === 6 }],
                        onClick: ($event) => setActiveTab(6)
                      }, "Demo Publications", 10, ["onClick"])
                    ]),
                    createVNode("div", { class: "dblp" }, [
                      createVNode("a", {
                        href: "https://dblp.org/pid/166/7652.html",
                        target: "_blank",
                        style: { "color": "#2F81FC" }
                      }, "[DBLP]"),
                      createTextVNode("  "),
                      createVNode("a", {
                        href: "https://scholar.google.com.hk/citations?user=b2AOUEEAAAAJ&hl=en",
                        target: "_blank",
                        style: { "color": "#2F81FC" }
                      }, "[Google Scholar]")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_col, {
              span: 12,
              xs: 24
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (activetab.value === 1) {
                    _push3(`<div class="atext" data-v-efdc73de${_scopeId2}><p data-v-efdc73de${_scopeId2}>IEEE Senior Member (Awarded in 2024)</p><p data-v-efdc73de${_scopeId2}>National Science Fund for Excellent Young Scientists (Overseas) (国家海外优青) (Awarded in 2023)</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (activetab.value === 2) {
                    _push3(`<div class="atext" data-v-efdc73de${_scopeId2}><p data-v-efdc73de${_scopeId2}>PI: Shenzhen University Internal Grant 2024 (研究生优秀教材建设项目) &quot;如何调整心态去撰写计算机科学论文？&quot; (How to Change Your Mindset to Write Academic Papers in Computer Science?), 200,000 RMB</p><p data-v-efdc73de${_scopeId2}>PI: Start-up grant from Shenzhen City (B-grade) 2024 (孔雀计划科研启动经费B档) &quot;快速地理信息系统算法&quot; (Fast Algorithms for Geographic Information Systems), 5,000,000 RMB</p><p data-v-efdc73de${_scopeId2}>PI: SZU Additional Start-up Grant 2024 &quot;大时空数据可视化&quot; (Large-scale Spatiotemporal Data Visualization), 700,000 RMB</p><p data-v-efdc73de${_scopeId2}>PI: NSFC (Excellent Young Scientists (Overseas)) 2023 &quot;地理时空大数据分析&quot; (Large-scale Spatiotemporal Data Analytics), 1,000,000 - 3,000,000 RMB</p><p data-v-efdc73de${_scopeId2}>PI: SZU Start-up Grant 2023 &quot;快速密度估计算法&quot; (Fast Algorithms for Density Estimation), 300,000 RMB</p><p data-v-efdc73de${_scopeId2}>PI: NSFC 2022 &quot;基于超快速算法的核密度估计&quot; (Efficient Algorithms for Kernel Density Estimation), 300,000 RMB</p><p data-v-efdc73de${_scopeId2}>PI: HKBU Internal Grant, 100,000 HKD</p><p data-v-efdc73de${_scopeId2}>PI: HKBU Start-up Grant, 120,000 HKD</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (activetab.value === 3) {
                    _push3(`<div class="atext" data-v-efdc73de${_scopeId2}><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Pak Lon Ip, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu, Christian S. Jensen.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/empty.pdf" target="_blank" data-v-efdc73de${_scopeId2}>Large-scale Spatiotemporal Kernel Density Visualization</a><br data-v-efdc73de${_scopeId2}> IEEE International Conference on Data Engineering (ICDE), 2025. </p><p data-v-efdc73de${_scopeId2}>Weike Tang, Dingming Wu, Tsz Nam Chan, Kezhong Lu.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/empty.pdf" target="_blank" data-v-efdc73de${_scopeId2}>Spatially Compact Dense Block Mining in Spatial Tensors</a><br data-v-efdc73de${_scopeId2}> Proceedings of ACM Conference on Knowledge Discovery and Data Mining (SIGKDD), 2025. </p><p data-v-efdc73de${_scopeId2}>Bo Guo, Zhihai Huang, Haitao Luo, Perpetual Hope Akwensi, Ruisheng Wang, Bo Huang, Tsz Nam Chan.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/Tunnel.pdf" target="_blank" data-v-efdc73de${_scopeId2}>An Enhanced Network for Extracting Tunnel Lining Defects using Transformer Encoder and Aggregate Decoder</a><br data-v-efdc73de${_scopeId2}> International Journal of Applied Earth Observation and Geoinformation (IJAEOG). </p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Bojian Zhu, Dingming Wu, Yun Peng, Leong Hou U.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/LARGE.pdf" target="_blank" data-v-efdc73de${_scopeId2}>LARGE: A Length-Aggregation-based Grid Structure for Line Density Visualization</a><br data-v-efdc73de${_scopeId2}> Proceedings of the VLDB Endowment (PVLDB), 2024. (Presented in VLDB 2025) </p><p data-v-efdc73de${_scopeId2}>Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/PageRank_Approx.pdf" target="_blank" data-v-efdc73de${_scopeId2}>Efficient and Accurate PageRank Approximation on Large Graphs</a><br data-v-efdc73de${_scopeId2}> Proceedings of ACM Conference on Management of Data (SIGMOD), 2025.<br data-v-efdc73de${_scopeId2}> Appear in the new ACM journal &quot;Proceedings of the ACM on Management of Data (PACMMOD)&quot;. </p><p data-v-efdc73de${_scopeId2}>Pak Lon Ip, Shenghui Zhang, Xuekai Wei, Tsz Nam Chan, Leong Hou U.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/empty.pdf" target="_blank" data-v-efdc73de${_scopeId2}>HFGNN: Efficient Graph Neural Networks using Hub-Fringe Structures</a><br data-v-efdc73de${_scopeId2}> IEEE International Conference on Data Mining (ICDM), 2024. </p><p data-v-efdc73de${_scopeId2}>Renchi Yang, Yidu Wu, Xiaoyang Lin, Qichen Wang, Tsz Nam Chan, Jieming Shi.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/ABG_clustering.pdf" target="_blank" data-v-efdc73de${_scopeId2}>Effective Clustering on Large Attributed Bipartite Graphs</a><br data-v-efdc73de${_scopeId2}> Proceedings of ACM Conference on Knowledge Discovery and Data Mining (SIGKDD), 2024. </p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Rui Zang, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/LION.pdf" target="_blank" data-v-efdc73de${_scopeId2}>LION: Fast and High-Resolution Network Kernel Density Visualization</a><br data-v-efdc73de${_scopeId2}> Proceedings of the VLDB Endowment (PVLDB), 2024. <a href="https://github.com/edisonchan2013928/LION" target="_blank" data-v-efdc73de${_scopeId2}>(Code)</a> <a href="https://edisonchan-szu.github.io/publication/LION.pptx" target="_blank" data-v-efdc73de${_scopeId2}>(Powerpoint Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/LION_Poster.pptx" data-v-efdc73de${_scopeId2}>(Poster Presentation)</a></p><p data-v-efdc73de${_scopeId2}>Shunran Zhang, Xiubo Zhang, Tsz Nam Chan, Shenghui Zhang, Leong Hou U.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/EMD_shape_loss.pdf" target="_blank" data-v-efdc73de${_scopeId2}>A Computation-aware Shape Loss Function for Point Cloud Completion</a><br data-v-efdc73de${_scopeId2}> Annual AAAI Conference on Artificial Intelligence (AAAI), 2024. <a href="https://edisonchan-szu.github.io/publication/Point_Cloud_Completion_AAAI24.pdf" target="_blank" data-v-efdc73de${_scopeId2}> (Poster Presentation)</a></p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Zhe Li, Leong Hou U, Reynold Cheng.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/PLAME.pdf" target="_blank" data-v-efdc73de${_scopeId2}>PLAME: Piecewise-Linear Approximate Measure for Additive Kernel SVM</a><br data-v-efdc73de${_scopeId2}> IEEE Transactions on Knowledge and Data Engineering (TKDE). <a href="https://github.com/edisonchan2013928/PLAME-Code" target="_blank" data-v-efdc73de${_scopeId2}>(Code)</a><br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/PLAME_TKDE_poster.pdf" target="_blank" data-v-efdc73de${_scopeId2}>Extended abstract</a> in IEEE International Conference on Data Engineering (ICDE), 2024. <a href="https://edisonchan-szu.github.io/publication/PLAME_Poster.pdf" target="_blank" data-v-efdc73de${_scopeId2}>(Poster Presentation)</a></p><p data-v-efdc73de${_scopeId2}>Yun Peng, Byron Choi, Tsz Nam Chan, Jianye Yang, Jianliang Xu.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/tau-MNG.pdf" target="_blank" data-v-efdc73de${_scopeId2}>Efficient Approximate Nearest Neighbor Search in Multi-dimensional Databases</a><br data-v-efdc73de${_scopeId2}> Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. <a href="https://github.com/csypeng/taumng_sigmod" target="_blank" data-v-efdc73de${_scopeId2}>(Code)</a> (Short Video)<br data-v-efdc73de${_scopeId2}> Appear in the new ACM journal &quot;Proceedings of the ACM on Management of Data (PACMMOD)&quot;. </p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Leong Hou U, Yun Peng, Byron Choi, Jianliang Xu.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/Network-K-function.pdf" target="_blank" data-v-efdc73de${_scopeId2}>Fast Network K-function-based Spatial Analysis</a><br data-v-efdc73de${_scopeId2}> Proceedings of the VLDB Endowment (PVLDB), 2022. <a href="https://github.com/edisonchan2013928/Network-K-function" target="_blank" data-v-efdc73de${_scopeId2}>(Code)</a><br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/Network K-function.mp4" target="_blank" data-v-efdc73de${_scopeId2}>(Video Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/Network K-function.pptx" data-v-efdc73de${_scopeId2}>(Powerpoint Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/network_K_function_TR.pdf" target="_blank" data-v-efdc73de${_scopeId2}>(Technical Report)</a> <a href="https://edisonchan-szu.github.io/publication/Network_K_function_Poster.pdf" target="_blank" data-v-efdc73de${_scopeId2}>(Poster Presentation)</a></p><p data-v-efdc73de${_scopeId2}>Jie Chen, Zaifeng Yang, Tsz Nam Chan, Hui Li, Junhui Hou, Lap-Pui Chau.<br data-v-efdc73de${_scopeId2}><a href="https://ieeexplore.ieee.org/abstract/document/9740005" target="_blank" data-v-efdc73de${_scopeId2}>Attention-Guided Progressive Neural Texture Fusion for High Dynamic Range Image Restoration</a><br data-v-efdc73de${_scopeId2}> IEEE Transactions on Image Processing (TIP). </p><p data-v-efdc73de${_scopeId2}>Yun Peng, Byron Choi, Tsz Nam Chan, Jianliang Xu.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/LAN.pdf" target="_blank" data-v-efdc73de${_scopeId2}>LAN: Learning-based Approximate k-Nearest Neighbor Search in Graph Databases</a><br data-v-efdc73de${_scopeId2}> IEEE International Conference on Data Engineering (ICDE), 2022. <a href="https://github.com/csypeng/LAN" target="_blank" data-v-efdc73de${_scopeId2}>(Code)</a></p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/SLAM.pdf" target="_blank" data-v-efdc73de${_scopeId2}>SLAM: Efficient Sweep Line Algorithms for Kernel Density Visualization</a><br data-v-efdc73de${_scopeId2}> Proceedings of ACM Conference on Management of Data (SIGMOD), 2022. <a href="https://github.com/edisonchan2013928/SLAM" target="_blank" data-v-efdc73de${_scopeId2}>(Code)</a><br data-v-efdc73de${_scopeId2}><a href="https://www.youtube.com/watch?v=aOl0RigDuAg" target="_blank" data-v-efdc73de${_scopeId2}>(Video Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/SLAM_presentation_v2.pptx" data-v-efdc73de${_scopeId2}>(Powerpoint Presentation)</a></p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Pak Lon Ip, Leong Hou U, Byron Choi, Jianliang Xu.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/SWS.pdf" target="_blank" data-v-efdc73de${_scopeId2}>SWS: A Complexity-Optimized Solution for Spatial-Temporal Kernel Density Visualization</a><br data-v-efdc73de${_scopeId2}> Proceedings of the VLDB Endowment (PVLDB), 2022. <a href="https://github.com/STKDV/STKDV" target="_blank" data-v-efdc73de${_scopeId2}>(Code)</a><br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/SWS.mp4" data-v-efdc73de${_scopeId2}>(Video Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/SWS.pptx" data-v-efdc73de${_scopeId2}>(Powerpoint Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/SWS_STKDV_TR.pdf" target="_blank" data-v-efdc73de${_scopeId2}>(Technical Report)</a> <a href="https://edisonchan-szu.github.io/publication/SWS_Poster.pdf" target="_blank" data-v-efdc73de${_scopeId2}>(Poster Presentation)</a></p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Pak Lon Ip, Leong Hou U, Byron Choi, Jianliang Xu.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/SAFE.pdf" target="_blank" data-v-efdc73de${_scopeId2}>SAFE: A Share-and-Aggregate Bandwidth Exploration Framework for Kernel Density Visualization</a><br data-v-efdc73de${_scopeId2}> Proceedings of the VLDB Endowment (PVLDB), 2022. <a href="https://github.com/edisonchan2013928/SAFE" target="_blank" data-v-efdc73de${_scopeId2}>(Code)</a><br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/SAFE.mp4" data-v-efdc73de${_scopeId2}>(Video Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/SAFE.pptx" data-v-efdc73de${_scopeId2}>(Powerpoint Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/SAFE_Poster.pdf" target="_blank" data-v-efdc73de${_scopeId2}>(Poster Presentation)</a></p><p data-v-efdc73de${_scopeId2}>Zhe Li, Man Lung Yiu, Tsz Nam Chan.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/PAW.pdf" target="_blank" data-v-efdc73de${_scopeId2}>PAW: Data Partitioning Meets Workload Variance</a><br data-v-efdc73de${_scopeId2}> IEEE International Conference on Data Engineering (ICDE), 2022. <a href="https://github.com/cloudray8580/NORA_Simulation" target="_blank" data-v-efdc73de${_scopeId2}>(Simulation Code)</a> <a href="https://github.com/cloudray8580/NORA_SPARK" target="_blank" data-v-efdc73de${_scopeId2}>(Spark Code)</a></p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Zhe Li, Leong Hou U, Jianliang Xu, Reynold Cheng.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/NKDV.pdf" target="_blank" data-v-efdc73de${_scopeId2}>Fast Augmentation Algorithms for Network Kernel Density Visualization</a><br data-v-efdc73de${_scopeId2}> Proceedings of the VLDB Endowment (PVLDB), 2021. <a href="https://github.com/edisonchan2013928/Network-Kernel-Density-Visualization-NKDV-Code" target="_blank" data-v-efdc73de${_scopeId2}>(Code)</a><br data-v-efdc73de${_scopeId2}><a href="https://www.youtube.com/watch?v=CHnepJYxnRA&amp;feature=youtu.be" target="_blank" data-v-efdc73de${_scopeId2}>(Video Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/NKDV_PVLDB_v2.pptx" data-v-efdc73de${_scopeId2}>(Powerpoint Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/Remark_NKDV.txt" target="_blank" data-v-efdc73de${_scopeId2}>(Remark)</a></p><p data-v-efdc73de${_scopeId2}>Zhe Li, Tsz Nam Chan, Man Lung Yiu, Christian S. Jensen.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/PolyFit.pdf" target="_blank" data-v-efdc73de${_scopeId2}>PolyFit: Polynomial-based Indexing Approach for Fast Approximate Range Aggregate Queries</a><br data-v-efdc73de${_scopeId2}> Proceedings of International Conference on Extending Database Technology (EDBT), 2021. </p><p data-v-efdc73de${_scopeId2}>Hui Li, Tsz Nam Chan, Xianbiao Qi, Wuyuan Xie.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/MESPD_Final.pdf" target="_blank" data-v-efdc73de${_scopeId2}>Detail-Preserving Multi-Exposure Fusion with Edge-Preserving Structural Patch Decomposition</a><br data-v-efdc73de${_scopeId2}> IEEE Transactions on Circuits and Systems for Video Technology (TCSVT). <a href="https://github.com/xiaohuiben/MESPD_TCSVT-2021" target="_blank" data-v-efdc73de${_scopeId2}>(Code)</a></p><p data-v-efdc73de${_scopeId2}>Zichen Zhu, Tsz Nam Chan, Reynold Cheng, Loc Do, Zhipeng Huang, Haoci Zhang.<br data-v-efdc73de${_scopeId2}><a href="https://ieeexplore.ieee.org/document/9253703" target="_blank" data-v-efdc73de${_scopeId2}>Effective and Efficient Discovery of Top-k Meta Paths in Heterogeneous Information Networks</a><br data-v-efdc73de${_scopeId2}> IEEE Transactions on Knowledge and Data Engineering (TKDE). <a href="https://github.com/littlepig2013/topk-meta-path-query" target="_blank" data-v-efdc73de${_scopeId2}>(Code)</a></p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Leong Hou U, Reynold Cheng, Man Lung Yiu, Shivansh Mittal.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/KARL_AK.pdf" target="_blank" data-v-efdc73de${_scopeId2}>Efficient Algorithms for Kernel Aggregation Queries</a><br data-v-efdc73de${_scopeId2}> IEEE Transactions on Knowledge and Data Engineering (TKDE). <a href="https://github.com/edisonchan2013928/Fast-Prediction-for-Additive-Kernels-Using-KARL" target="_blank" data-v-efdc73de${_scopeId2}>(Code)</a></p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Reynold Cheng, Man Lung Yiu.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/QUAD.pdf" target="_blank" data-v-efdc73de${_scopeId2}>QUAD: Quadratic-Bound-based Kernel Density Visualization</a><br data-v-efdc73de${_scopeId2}> Proceedings of ACM Conference on Management of Data (SIGMOD), 2020. <a href="https://github.com/edisonchan2013928/QUAD-for-Kernel-Density-Visualization-KDV-" target="_blank" data-v-efdc73de${_scopeId2}>(Code)</a><br data-v-efdc73de${_scopeId2}><a href="https://www.youtube.com/watch?v=4-3pYkPbgBo&amp;feature=youtu.be" target="_blank" data-v-efdc73de${_scopeId2}>(Video Presentation)</a> <a href="https://edisonchan-szu.github.io/publication/QUAD_presentation_v5.pptx" data-v-efdc73de${_scopeId2}>(Powerpoint Presentation)</a> <a href="https://www.cs.hku.hk/data/techreps/document/TR-2019-05.pdf" target="_blank" data-v-efdc73de${_scopeId2}>(Technical Report)</a></p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan.<br data-v-efdc73de${_scopeId2}><a href="https://ira.lib.polyu.edu.hk/handle/10397/80535" target="_blank" data-v-efdc73de${_scopeId2}>Similarity Measures: Algorithms and Applications</a><br data-v-efdc73de${_scopeId2}> PhD Thesis. </p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Man Lung Yiu, Leong Hou U.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/EMD.pdf" target="_blank" data-v-efdc73de${_scopeId2}>The Power of Bounds: Answering Approximate Earth Mover&#39;s Distance with Parametric Bounds</a><br data-v-efdc73de${_scopeId2}> IEEE Transactions on Knowledge and Data Engineering (TKDE). <a href="https://github.com/edisonchan2013928/EMD_Code" target="_blank" data-v-efdc73de${_scopeId2}>(Code)</a><br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/EMD_extended_abstract.pdf" target="_blank" data-v-efdc73de${_scopeId2}>Extended abstract</a> in IEEE International Conference on Data Engineering (ICDE), 2020. <a href="https://www.youtube.com/watch?v=Zgov0uNxZQ4" target="_blank" data-v-efdc73de${_scopeId2}>(Video Presentation)</a></p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Man Lung Yiu, Leong Hou U.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/KARL.pdf" target="_blank" data-v-efdc73de${_scopeId2}>KARL: Fast Kernel Aggregation Queries</a><br data-v-efdc73de${_scopeId2}> IEEE International Conference on Data Engineering (ICDE), 2019. <a href="https://github.com/edisonchan2013928/KARL-Fast-Kernel-Aggregation-Queries" target="_blank" data-v-efdc73de${_scopeId2}>(Code)</a> <a href="https://edisonchan-szu.github.io/publication/KARL_Poster.pdf" target="_blank" data-v-efdc73de${_scopeId2}>(Poster Presentation)</a></p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Man Lung Yiu, Kien A. Hua.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/Matrix_NN.pdf" target="_blank" data-v-efdc73de${_scopeId2}>Efficient Sub-Window Nearest Neighbor Search on Matrix</a><br data-v-efdc73de${_scopeId2}> IEEE Transactions on Knowledge and Data Engineering (TKDE). </p><p data-v-efdc73de${_scopeId2}>Hui Li, Tsz Nam Chan, Man Lung Yiu, Nikos Mamoulis.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/FEXIPRO.pdf" target="_blank" data-v-efdc73de${_scopeId2}>FEXIPRO: Fast and Exact Inner Product Retrieval in Recommender Systems</a><br data-v-efdc73de${_scopeId2}> Proceedings of ACM Conference on Management of Data (SIGMOD), 2017. <a href="https://github.com/Hui-Li/MFRetrieval" target="_blank" data-v-efdc73de${_scopeId2}>(Code)</a></p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Man Lung Yiu, Kien A. Hua.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/Matrix_NN_conf.pdf" target="_blank" data-v-efdc73de${_scopeId2}>A Progressive Approach for Similarity Search on Matrix</a><br data-v-efdc73de${_scopeId2}> International Symposium on Spatial and Temporal Databases (SSTD), 2015. </p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (activetab.value === 4) {
                    _push3(`<div class="atext" data-v-efdc73de${_scopeId2}><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Pak Lon Ip, , Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu, Christian S. Jensen.<br data-v-efdc73de${_scopeId2}> A Method, System, and Terminal for Spatiotemporal Kernel Density Visualization via PREFIX-Matrix Structure. (一种基于前缀矩阵的时空核密度可视化方法、系统及终端)<br data-v-efdc73de${_scopeId2}> Chinese Patent <a href="https://edisonchan-szu.github.io/publication/PREFIX_patent_protected.pdf" target="_blank" data-v-efdc73de${_scopeId2}>(Protected (if granted)</a> starting from 31st December 2024) </p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Bojian Zhu, Dingming Wu, Yun Peng, Leong Hou U.<br data-v-efdc73de${_scopeId2}> A Method and System for Generating Line Density Visualization via Length-Aggregation-based Grid Structure. (一种基于长度聚合的网格结构生成线密度的方法及系统)<br data-v-efdc73de${_scopeId2}> Chinese Patent <a href="https://edisonchan-szu.github.io/publication/LARGE_granted.pdf" target="_blank" data-v-efdc73de${_scopeId2}>(Granted)</a> <a href="https://edisonchan-szu.github.io/publication/LARGE_patent_protected.pdf" target="_blank" data-v-efdc73de${_scopeId2}>(Protected</a> starting from 30th October 2024) </p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (activetab.value === 5) {
                    _push3(`<div class="atext" data-v-efdc73de${_scopeId2}><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/LSGA_tutorial.pdf" target="_blank" data-v-efdc73de${_scopeId2}>Large-scale Geospatial Analytics: Problems, Challenges, and Opportunities</a> (1.5 hours)<br data-v-efdc73de${_scopeId2}> Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. <a href="https://edisonchan-szu.github.io/publication/SIGMOD23-Tutorial-short-video.mp4" target="_blank" data-v-efdc73de${_scopeId2}>(Short Video)</a> <a href="https://github.com/edisonchan2013928/Tutorial-slides/blob/main/LSGA_SIGMOD2023_Tutorial.pdf" target="_blank" data-v-efdc73de${_scopeId2}>(Tutorial Slides)</a></p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/KDV_tutorial.pdf" target="_blank" data-v-efdc73de${_scopeId2}>Kernel Density Visualization for Big Geospatial Data: Algorithms and Applications</a> (1.5 hours)<br data-v-efdc73de${_scopeId2}> IEEE International Conference on Mobile Data Management (MDM), 2023. <a href="https://github.com/edisonchan2013928/Tutorial-slides/blob/main/KDV_tutorial_slides.pptx" target="_blank" data-v-efdc73de${_scopeId2}>(Tutorial Slides)</a></p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (activetab.value === 6) {
                    _push3(`<div class="atext" data-v-efdc73de${_scopeId2}><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Rui Zang, Pak Lon Ip, Leong Hou U, Jianliang Xu.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/PyNKDV.pdf" target="_blank" data-v-efdc73de${_scopeId2}>PyNKDV: An Efficient Network Kernel Density Visualization Library for Geospatial Analytic Systems</a><br data-v-efdc73de${_scopeId2}><a href="https://github.com/edisonchan2013928/PyNKDV" target="_blank" data-v-efdc73de${_scopeId2}>(Library Homepage)</a><br data-v-efdc73de${_scopeId2}> Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. <a href="https://edisonchan-szu.github.io/publication/SIGMOD23-Demo-short-video.mp4" target="_blank" data-v-efdc73de${_scopeId2}>(Short Video)</a> <a href="https://edisonchan-szu.github.io/publication/PyNKDV_poster.pdf" target="_blank" data-v-efdc73de${_scopeId2}>(Poster Presentation)</a></p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Pak Lon Ip, Kaiyan Zhao, Leong Hou U, Byron Choi, Jianliang Xu.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/LIBKDV.pdf" target="_blank" data-v-efdc73de${_scopeId2}>LIBKDV: A Versatile Kernel Density Visualization Library for Geospatial Analytics</a> <a href="https://github.com/libkdv/libkdv" target="_blank" data-v-efdc73de${_scopeId2}>(Library Homepage)</a><br data-v-efdc73de${_scopeId2}> Proceedings of the VLDB Endowment (PVLDB), 2022. <a href="https://edisonchan-szu.github.io/system/Video/LIBKDV_Video_final.mp4" target="_blank" data-v-efdc73de${_scopeId2}>(Video Presentation)</a><br data-v-efdc73de${_scopeId2}> Impact case 1: Used in the Macau COVID-19 HotSpot Map <a href="https://degroup.cis.um.edu.mo/covid-19/" target="_blank" data-v-efdc73de${_scopeId2}>(Project Website)</a> <a href="https://www.einnews.com/pr_news/581503973/um-covid-19-research-team-proposes-key-points-for-combating-epidemic" target="_blank" data-v-efdc73de${_scopeId2}>(News)</a> <a href="https://www.tdm.com.mo/zh-hant/news-detail/718799?date=" target="_blank" data-v-efdc73de${_scopeId2}>(Video News (in Cantonese))</a><br data-v-efdc73de${_scopeId2}> Impact case 2: Used in the Hong Kong COVID-19 HotSpot Map <a href="https://covid19.comp.hkbu.edu.hk/" target="_blank" data-v-efdc73de${_scopeId2}>(Project Website)</a> <a href="https://www.thestandard.com.hk/breaking-news/section/4/197114/HKBU-led-research-team-launches-Hong-Kong-COVID-19-hotspot-map" target="_blank" data-v-efdc73de${_scopeId2}>(News)</a> <a href="https://hk.on.cc/hk/bkn/cnt/news/20221114/bkn-20221114134328250-1114_00822_001.html" target="_blank" data-v-efdc73de${_scopeId2}>(News (in Chinese))</a></p><p data-v-efdc73de${_scopeId2}>Tsz Nam Chan, Pak Lon Ip, Leong Hou U, Weng Hou Tong, Shivansh Mittal, Ye Li, Reynold Cheng.<br data-v-efdc73de${_scopeId2}><a href="https://edisonchan-szu.github.io/publication/KDV-Explorer.pdf" target="_blank" data-v-efdc73de${_scopeId2}>KDV-Explorer: A Near Real-Time Kernel Density Visualization System for Spatial Analysis</a> <a href="https://edisonchan-szu.github.io/system/KDV-Explorer.html" target="_blank" data-v-efdc73de${_scopeId2}>(Project Homepage)</a><br data-v-efdc73de${_scopeId2}> Proceedings of the VLDB Endowment (PVLDB), 2021. <a href="https://www.youtube.com/watch?v=cHoILdTuz_o&amp;feature=youtu.be" target="_blank" data-v-efdc73de${_scopeId2}>(Video Presentation)</a></p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    activetab.value === 1 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "atext"
                    }, [
                      createVNode("p", null, "IEEE Senior Member (Awarded in 2024)"),
                      createVNode("p", null, "National Science Fund for Excellent Young Scientists (Overseas) (国家海外优青) (Awarded in 2023)")
                    ])) : createCommentVNode("", true),
                    activetab.value === 2 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "atext"
                    }, [
                      createVNode("p", null, 'PI: Shenzhen University Internal Grant 2024 (研究生优秀教材建设项目) "如何调整心态去撰写计算机科学论文？" (How to Change Your Mindset to Write Academic Papers in Computer Science?), 200,000 RMB'),
                      createVNode("p", null, 'PI: Start-up grant from Shenzhen City (B-grade) 2024 (孔雀计划科研启动经费B档) "快速地理信息系统算法" (Fast Algorithms for Geographic Information Systems), 5,000,000 RMB'),
                      createVNode("p", null, 'PI: SZU Additional Start-up Grant 2024 "大时空数据可视化" (Large-scale Spatiotemporal Data Visualization), 700,000 RMB'),
                      createVNode("p", null, 'PI: NSFC (Excellent Young Scientists (Overseas)) 2023 "地理时空大数据分析" (Large-scale Spatiotemporal Data Analytics), 1,000,000 - 3,000,000 RMB'),
                      createVNode("p", null, 'PI: SZU Start-up Grant 2023 "快速密度估计算法" (Fast Algorithms for Density Estimation), 300,000 RMB'),
                      createVNode("p", null, 'PI: NSFC 2022 "基于超快速算法的核密度估计" (Efficient Algorithms for Kernel Density Estimation), 300,000 RMB'),
                      createVNode("p", null, "PI: HKBU Internal Grant, 100,000 HKD"),
                      createVNode("p", null, "PI: HKBU Start-up Grant, 120,000 HKD")
                    ])) : createCommentVNode("", true),
                    activetab.value === 3 ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "atext"
                    }, [
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Pak Lon Ip, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu, Christian S. Jensen."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/empty.pdf",
                          target: "_blank"
                        }, "Large-scale Spatiotemporal Kernel Density Visualization"),
                        createVNode("br"),
                        createTextVNode(" IEEE International Conference on Data Engineering (ICDE), 2025. ")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Weike Tang, Dingming Wu, Tsz Nam Chan, Kezhong Lu."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/empty.pdf",
                          target: "_blank"
                        }, "Spatially Compact Dense Block Mining in Spatial Tensors"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of ACM Conference on Knowledge Discovery and Data Mining (SIGKDD), 2025. ")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Bo Guo, Zhihai Huang, Haitao Luo, Perpetual Hope Akwensi, Ruisheng Wang, Bo Huang, Tsz Nam Chan."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/Tunnel.pdf",
                          target: "_blank"
                        }, "An Enhanced Network for Extracting Tunnel Lining Defects using Transformer Encoder and Aggregate Decoder"),
                        createVNode("br"),
                        createTextVNode(" International Journal of Applied Earth Observation and Geoinformation (IJAEOG). ")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Bojian Zhu, Dingming Wu, Yun Peng, Leong Hou U."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/LARGE.pdf",
                          target: "_blank"
                        }, "LARGE: A Length-Aggregation-based Grid Structure for Line Density Visualization"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of the VLDB Endowment (PVLDB), 2024. (Presented in VLDB 2025) ")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/PageRank_Approx.pdf",
                          target: "_blank"
                        }, "Efficient and Accurate PageRank Approximation on Large Graphs"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of ACM Conference on Management of Data (SIGMOD), 2025."),
                        createVNode("br"),
                        createTextVNode(' Appear in the new ACM journal "Proceedings of the ACM on Management of Data (PACMMOD)". ')
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Pak Lon Ip, Shenghui Zhang, Xuekai Wei, Tsz Nam Chan, Leong Hou U."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/empty.pdf",
                          target: "_blank"
                        }, "HFGNN: Efficient Graph Neural Networks using Hub-Fringe Structures"),
                        createVNode("br"),
                        createTextVNode(" IEEE International Conference on Data Mining (ICDM), 2024. ")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Renchi Yang, Yidu Wu, Xiaoyang Lin, Qichen Wang, Tsz Nam Chan, Jieming Shi."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/ABG_clustering.pdf",
                          target: "_blank"
                        }, "Effective Clustering on Large Attributed Bipartite Graphs"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of ACM Conference on Knowledge Discovery and Data Mining (SIGKDD), 2024. ")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Rui Zang, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/LION.pdf",
                          target: "_blank"
                        }, "LION: Fast and High-Resolution Network Kernel Density Visualization"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of the VLDB Endowment (PVLDB), 2024. "),
                        createVNode("a", {
                          href: "https://github.com/edisonchan2013928/LION",
                          target: "_blank"
                        }, "(Code)"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/LION.pptx",
                          target: "_blank"
                        }, "(Powerpoint Presentation)"),
                        createTextVNode(),
                        createVNode("a", { href: "https://edisonchan-szu.github.io/publication/LION_Poster.pptx" }, "(Poster Presentation)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Shunran Zhang, Xiubo Zhang, Tsz Nam Chan, Shenghui Zhang, Leong Hou U."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/EMD_shape_loss.pdf",
                          target: "_blank"
                        }, "A Computation-aware Shape Loss Function for Point Cloud Completion"),
                        createVNode("br"),
                        createTextVNode(" Annual AAAI Conference on Artificial Intelligence (AAAI), 2024. "),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/Point_Cloud_Completion_AAAI24.pdf",
                          target: "_blank"
                        }, " (Poster Presentation)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Zhe Li, Leong Hou U, Reynold Cheng."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/PLAME.pdf",
                          target: "_blank"
                        }, "PLAME: Piecewise-Linear Approximate Measure for Additive Kernel SVM"),
                        createVNode("br"),
                        createTextVNode(" IEEE Transactions on Knowledge and Data Engineering (TKDE). "),
                        createVNode("a", {
                          href: "https://github.com/edisonchan2013928/PLAME-Code",
                          target: "_blank"
                        }, "(Code)"),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/PLAME_TKDE_poster.pdf",
                          target: "_blank"
                        }, "Extended abstract"),
                        createTextVNode(" in IEEE International Conference on Data Engineering (ICDE), 2024. "),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/PLAME_Poster.pdf",
                          target: "_blank"
                        }, "(Poster Presentation)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Yun Peng, Byron Choi, Tsz Nam Chan, Jianye Yang, Jianliang Xu."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/tau-MNG.pdf",
                          target: "_blank"
                        }, "Efficient Approximate Nearest Neighbor Search in Multi-dimensional Databases"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. "),
                        createVNode("a", {
                          href: "https://github.com/csypeng/taumng_sigmod",
                          target: "_blank"
                        }, "(Code)"),
                        createTextVNode(" (Short Video)"),
                        createVNode("br"),
                        createTextVNode(' Appear in the new ACM journal "Proceedings of the ACM on Management of Data (PACMMOD)". ')
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Leong Hou U, Yun Peng, Byron Choi, Jianliang Xu."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/Network-K-function.pdf",
                          target: "_blank"
                        }, "Fast Network K-function-based Spatial Analysis"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of the VLDB Endowment (PVLDB), 2022. "),
                        createVNode("a", {
                          href: "https://github.com/edisonchan2013928/Network-K-function",
                          target: "_blank"
                        }, "(Code)"),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/Network K-function.mp4",
                          target: "_blank"
                        }, "(Video Presentation)"),
                        createTextVNode(),
                        createVNode("a", { href: "https://edisonchan-szu.github.io/publication/Network K-function.pptx" }, "(Powerpoint Presentation)"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/network_K_function_TR.pdf",
                          target: "_blank"
                        }, "(Technical Report)"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/Network_K_function_Poster.pdf",
                          target: "_blank"
                        }, "(Poster Presentation)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Jie Chen, Zaifeng Yang, Tsz Nam Chan, Hui Li, Junhui Hou, Lap-Pui Chau."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://ieeexplore.ieee.org/abstract/document/9740005",
                          target: "_blank"
                        }, "Attention-Guided Progressive Neural Texture Fusion for High Dynamic Range Image Restoration"),
                        createVNode("br"),
                        createTextVNode(" IEEE Transactions on Image Processing (TIP). ")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Yun Peng, Byron Choi, Tsz Nam Chan, Jianliang Xu."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/LAN.pdf",
                          target: "_blank"
                        }, "LAN: Learning-based Approximate k-Nearest Neighbor Search in Graph Databases"),
                        createVNode("br"),
                        createTextVNode(" IEEE International Conference on Data Engineering (ICDE), 2022. "),
                        createVNode("a", {
                          href: "https://github.com/csypeng/LAN",
                          target: "_blank"
                        }, "(Code)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/SLAM.pdf",
                          target: "_blank"
                        }, "SLAM: Efficient Sweep Line Algorithms for Kernel Density Visualization"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of ACM Conference on Management of Data (SIGMOD), 2022. "),
                        createVNode("a", {
                          href: "https://github.com/edisonchan2013928/SLAM",
                          target: "_blank"
                        }, "(Code)"),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://www.youtube.com/watch?v=aOl0RigDuAg",
                          target: "_blank"
                        }, "(Video Presentation)"),
                        createTextVNode(),
                        createVNode("a", { href: "https://edisonchan-szu.github.io/publication/SLAM_presentation_v2.pptx" }, "(Powerpoint Presentation)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Pak Lon Ip, Leong Hou U, Byron Choi, Jianliang Xu."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/SWS.pdf",
                          target: "_blank"
                        }, "SWS: A Complexity-Optimized Solution for Spatial-Temporal Kernel Density Visualization"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of the VLDB Endowment (PVLDB), 2022. "),
                        createVNode("a", {
                          href: "https://github.com/STKDV/STKDV",
                          target: "_blank"
                        }, "(Code)"),
                        createVNode("br"),
                        createVNode("a", { href: "https://edisonchan-szu.github.io/publication/SWS.mp4" }, "(Video Presentation)"),
                        createTextVNode(),
                        createVNode("a", { href: "https://edisonchan-szu.github.io/publication/SWS.pptx" }, "(Powerpoint Presentation)"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/SWS_STKDV_TR.pdf",
                          target: "_blank"
                        }, "(Technical Report)"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/SWS_Poster.pdf",
                          target: "_blank"
                        }, "(Poster Presentation)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Pak Lon Ip, Leong Hou U, Byron Choi, Jianliang Xu."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/SAFE.pdf",
                          target: "_blank"
                        }, "SAFE: A Share-and-Aggregate Bandwidth Exploration Framework for Kernel Density Visualization"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of the VLDB Endowment (PVLDB), 2022. "),
                        createVNode("a", {
                          href: "https://github.com/edisonchan2013928/SAFE",
                          target: "_blank"
                        }, "(Code)"),
                        createVNode("br"),
                        createVNode("a", { href: "https://edisonchan-szu.github.io/publication/SAFE.mp4" }, "(Video Presentation)"),
                        createTextVNode(),
                        createVNode("a", { href: "https://edisonchan-szu.github.io/publication/SAFE.pptx" }, "(Powerpoint Presentation)"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/SAFE_Poster.pdf",
                          target: "_blank"
                        }, "(Poster Presentation)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Zhe Li, Man Lung Yiu, Tsz Nam Chan."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/PAW.pdf",
                          target: "_blank"
                        }, "PAW: Data Partitioning Meets Workload Variance"),
                        createVNode("br"),
                        createTextVNode(" IEEE International Conference on Data Engineering (ICDE), 2022. "),
                        createVNode("a", {
                          href: "https://github.com/cloudray8580/NORA_Simulation",
                          target: "_blank"
                        }, "(Simulation Code)"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://github.com/cloudray8580/NORA_SPARK",
                          target: "_blank"
                        }, "(Spark Code)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Zhe Li, Leong Hou U, Jianliang Xu, Reynold Cheng."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/NKDV.pdf",
                          target: "_blank"
                        }, "Fast Augmentation Algorithms for Network Kernel Density Visualization"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of the VLDB Endowment (PVLDB), 2021. "),
                        createVNode("a", {
                          href: "https://github.com/edisonchan2013928/Network-Kernel-Density-Visualization-NKDV-Code",
                          target: "_blank"
                        }, "(Code)"),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://www.youtube.com/watch?v=CHnepJYxnRA&feature=youtu.be",
                          target: "_blank"
                        }, "(Video Presentation)"),
                        createTextVNode(),
                        createVNode("a", { href: "https://edisonchan-szu.github.io/publication/NKDV_PVLDB_v2.pptx" }, "(Powerpoint Presentation)"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/Remark_NKDV.txt",
                          target: "_blank"
                        }, "(Remark)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Zhe Li, Tsz Nam Chan, Man Lung Yiu, Christian S. Jensen."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/PolyFit.pdf",
                          target: "_blank"
                        }, "PolyFit: Polynomial-based Indexing Approach for Fast Approximate Range Aggregate Queries"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of International Conference on Extending Database Technology (EDBT), 2021. ")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Hui Li, Tsz Nam Chan, Xianbiao Qi, Wuyuan Xie."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/MESPD_Final.pdf",
                          target: "_blank"
                        }, "Detail-Preserving Multi-Exposure Fusion with Edge-Preserving Structural Patch Decomposition"),
                        createVNode("br"),
                        createTextVNode(" IEEE Transactions on Circuits and Systems for Video Technology (TCSVT). "),
                        createVNode("a", {
                          href: "https://github.com/xiaohuiben/MESPD_TCSVT-2021",
                          target: "_blank"
                        }, "(Code)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Zichen Zhu, Tsz Nam Chan, Reynold Cheng, Loc Do, Zhipeng Huang, Haoci Zhang."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://ieeexplore.ieee.org/document/9253703",
                          target: "_blank"
                        }, "Effective and Efficient Discovery of Top-k Meta Paths in Heterogeneous Information Networks"),
                        createVNode("br"),
                        createTextVNode(" IEEE Transactions on Knowledge and Data Engineering (TKDE). "),
                        createVNode("a", {
                          href: "https://github.com/littlepig2013/topk-meta-path-query",
                          target: "_blank"
                        }, "(Code)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Leong Hou U, Reynold Cheng, Man Lung Yiu, Shivansh Mittal."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/KARL_AK.pdf",
                          target: "_blank"
                        }, "Efficient Algorithms for Kernel Aggregation Queries"),
                        createVNode("br"),
                        createTextVNode(" IEEE Transactions on Knowledge and Data Engineering (TKDE). "),
                        createVNode("a", {
                          href: "https://github.com/edisonchan2013928/Fast-Prediction-for-Additive-Kernels-Using-KARL",
                          target: "_blank"
                        }, "(Code)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Reynold Cheng, Man Lung Yiu."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/QUAD.pdf",
                          target: "_blank"
                        }, "QUAD: Quadratic-Bound-based Kernel Density Visualization"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of ACM Conference on Management of Data (SIGMOD), 2020. "),
                        createVNode("a", {
                          href: "https://github.com/edisonchan2013928/QUAD-for-Kernel-Density-Visualization-KDV-",
                          target: "_blank"
                        }, "(Code)"),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://www.youtube.com/watch?v=4-3pYkPbgBo&feature=youtu.be",
                          target: "_blank"
                        }, "(Video Presentation)"),
                        createTextVNode(),
                        createVNode("a", { href: "https://edisonchan-szu.github.io/publication/QUAD_presentation_v5.pptx" }, "(Powerpoint Presentation)"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://www.cs.hku.hk/data/techreps/document/TR-2019-05.pdf",
                          target: "_blank"
                        }, "(Technical Report)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://ira.lib.polyu.edu.hk/handle/10397/80535",
                          target: "_blank"
                        }, "Similarity Measures: Algorithms and Applications"),
                        createVNode("br"),
                        createTextVNode(" PhD Thesis. ")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Man Lung Yiu, Leong Hou U."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/EMD.pdf",
                          target: "_blank"
                        }, "The Power of Bounds: Answering Approximate Earth Mover's Distance with Parametric Bounds"),
                        createVNode("br"),
                        createTextVNode(" IEEE Transactions on Knowledge and Data Engineering (TKDE). "),
                        createVNode("a", {
                          href: "https://github.com/edisonchan2013928/EMD_Code",
                          target: "_blank"
                        }, "(Code)"),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/EMD_extended_abstract.pdf",
                          target: "_blank"
                        }, "Extended abstract"),
                        createTextVNode(" in IEEE International Conference on Data Engineering (ICDE), 2020. "),
                        createVNode("a", {
                          href: "https://www.youtube.com/watch?v=Zgov0uNxZQ4",
                          target: "_blank"
                        }, "(Video Presentation)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Man Lung Yiu, Leong Hou U."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/KARL.pdf",
                          target: "_blank"
                        }, "KARL: Fast Kernel Aggregation Queries"),
                        createVNode("br"),
                        createTextVNode(" IEEE International Conference on Data Engineering (ICDE), 2019. "),
                        createVNode("a", {
                          href: "https://github.com/edisonchan2013928/KARL-Fast-Kernel-Aggregation-Queries",
                          target: "_blank"
                        }, "(Code)"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/KARL_Poster.pdf",
                          target: "_blank"
                        }, "(Poster Presentation)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Man Lung Yiu, Kien A. Hua."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/Matrix_NN.pdf",
                          target: "_blank"
                        }, "Efficient Sub-Window Nearest Neighbor Search on Matrix"),
                        createVNode("br"),
                        createTextVNode(" IEEE Transactions on Knowledge and Data Engineering (TKDE). ")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Hui Li, Tsz Nam Chan, Man Lung Yiu, Nikos Mamoulis."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/FEXIPRO.pdf",
                          target: "_blank"
                        }, "FEXIPRO: Fast and Exact Inner Product Retrieval in Recommender Systems"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of ACM Conference on Management of Data (SIGMOD), 2017. "),
                        createVNode("a", {
                          href: "https://github.com/Hui-Li/MFRetrieval",
                          target: "_blank"
                        }, "(Code)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Man Lung Yiu, Kien A. Hua."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/Matrix_NN_conf.pdf",
                          target: "_blank"
                        }, "A Progressive Approach for Similarity Search on Matrix"),
                        createVNode("br"),
                        createTextVNode(" International Symposium on Spatial and Temporal Databases (SSTD), 2015. ")
                      ])
                    ])) : createCommentVNode("", true),
                    activetab.value === 4 ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "atext"
                    }, [
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Pak Lon Ip, , Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu, Christian S. Jensen."),
                        createVNode("br"),
                        createTextVNode(" A Method, System, and Terminal for Spatiotemporal Kernel Density Visualization via PREFIX-Matrix Structure. (一种基于前缀矩阵的时空核密度可视化方法、系统及终端)"),
                        createVNode("br"),
                        createTextVNode(" Chinese Patent "),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/PREFIX_patent_protected.pdf",
                          target: "_blank"
                        }, "(Protected (if granted)"),
                        createTextVNode(" starting from 31st December 2024) ")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Bojian Zhu, Dingming Wu, Yun Peng, Leong Hou U."),
                        createVNode("br"),
                        createTextVNode(" A Method and System for Generating Line Density Visualization via Length-Aggregation-based Grid Structure. (一种基于长度聚合的网格结构生成线密度的方法及系统)"),
                        createVNode("br"),
                        createTextVNode(" Chinese Patent "),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/LARGE_granted.pdf",
                          target: "_blank"
                        }, "(Granted)"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/LARGE_patent_protected.pdf",
                          target: "_blank"
                        }, "(Protected"),
                        createTextVNode(" starting from 30th October 2024) ")
                      ])
                    ])) : createCommentVNode("", true),
                    activetab.value === 5 ? (openBlock(), createBlock("div", {
                      key: 4,
                      class: "atext"
                    }, [
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/LSGA_tutorial.pdf",
                          target: "_blank"
                        }, "Large-scale Geospatial Analytics: Problems, Challenges, and Opportunities"),
                        createTextVNode(" (1.5 hours)"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. "),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/SIGMOD23-Tutorial-short-video.mp4",
                          target: "_blank"
                        }, "(Short Video)"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://github.com/edisonchan2013928/Tutorial-slides/blob/main/LSGA_SIGMOD2023_Tutorial.pdf",
                          target: "_blank"
                        }, "(Tutorial Slides)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/KDV_tutorial.pdf",
                          target: "_blank"
                        }, "Kernel Density Visualization for Big Geospatial Data: Algorithms and Applications"),
                        createTextVNode(" (1.5 hours)"),
                        createVNode("br"),
                        createTextVNode(" IEEE International Conference on Mobile Data Management (MDM), 2023. "),
                        createVNode("a", {
                          href: "https://github.com/edisonchan2013928/Tutorial-slides/blob/main/KDV_tutorial_slides.pptx",
                          target: "_blank"
                        }, "(Tutorial Slides)")
                      ])
                    ])) : createCommentVNode("", true),
                    activetab.value === 6 ? (openBlock(), createBlock("div", {
                      key: 5,
                      class: "atext"
                    }, [
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Rui Zang, Pak Lon Ip, Leong Hou U, Jianliang Xu."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/PyNKDV.pdf",
                          target: "_blank"
                        }, "PyNKDV: An Efficient Network Kernel Density Visualization Library for Geospatial Analytic Systems"),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://github.com/edisonchan2013928/PyNKDV",
                          target: "_blank"
                        }, "(Library Homepage)"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. "),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/SIGMOD23-Demo-short-video.mp4",
                          target: "_blank"
                        }, "(Short Video)"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/PyNKDV_poster.pdf",
                          target: "_blank"
                        }, "(Poster Presentation)")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Pak Lon Ip, Kaiyan Zhao, Leong Hou U, Byron Choi, Jianliang Xu."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/LIBKDV.pdf",
                          target: "_blank"
                        }, "LIBKDV: A Versatile Kernel Density Visualization Library for Geospatial Analytics"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://github.com/libkdv/libkdv",
                          target: "_blank"
                        }, "(Library Homepage)"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of the VLDB Endowment (PVLDB), 2022. "),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/system/Video/LIBKDV_Video_final.mp4",
                          target: "_blank"
                        }, "(Video Presentation)"),
                        createVNode("br"),
                        createTextVNode(" Impact case 1: Used in the Macau COVID-19 HotSpot Map "),
                        createVNode("a", {
                          href: "https://degroup.cis.um.edu.mo/covid-19/",
                          target: "_blank"
                        }, "(Project Website)"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://www.einnews.com/pr_news/581503973/um-covid-19-research-team-proposes-key-points-for-combating-epidemic",
                          target: "_blank"
                        }, "(News)"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://www.tdm.com.mo/zh-hant/news-detail/718799?date=",
                          target: "_blank"
                        }, "(Video News (in Cantonese))"),
                        createVNode("br"),
                        createTextVNode(" Impact case 2: Used in the Hong Kong COVID-19 HotSpot Map "),
                        createVNode("a", {
                          href: "https://covid19.comp.hkbu.edu.hk/",
                          target: "_blank"
                        }, "(Project Website)"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://www.thestandard.com.hk/breaking-news/section/4/197114/HKBU-led-research-team-launches-Hong-Kong-COVID-19-hotspot-map",
                          target: "_blank"
                        }, "(News)"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://hk.on.cc/hk/bkn/cnt/news/20221114/bkn-20221114134328250-1114_00822_001.html",
                          target: "_blank"
                        }, "(News (in Chinese))")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Tsz Nam Chan, Pak Lon Ip, Leong Hou U, Weng Hou Tong, Shivansh Mittal, Ye Li, Reynold Cheng."),
                        createVNode("br"),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/publication/KDV-Explorer.pdf",
                          target: "_blank"
                        }, "KDV-Explorer: A Near Real-Time Kernel Density Visualization System for Spatial Analysis"),
                        createTextVNode(),
                        createVNode("a", {
                          href: "https://edisonchan-szu.github.io/system/KDV-Explorer.html",
                          target: "_blank"
                        }, "(Project Homepage)"),
                        createVNode("br"),
                        createTextVNode(" Proceedings of the VLDB Endowment (PVLDB), 2021. "),
                        createVNode("a", {
                          href: "https://www.youtube.com/watch?v=cHoILdTuz_o&feature=youtu.be",
                          target: "_blank"
                        }, "(Video Presentation)")
                      ])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_col, {
                span: 2,
                xs: 0
              }),
              createVNode(_component_el_col, {
                span: 8,
                xs: 24
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "abuttons" }, [
                    createVNode("button", {
                      class: ["abutton", { "selecttab": activetab.value === 1 }],
                      onClick: ($event) => setActiveTab(1)
                    }, "Research Awards", 10, ["onClick"]),
                    createVNode("button", {
                      class: ["abutton", { "selecttab": activetab.value === 2 }],
                      onClick: ($event) => setActiveTab(2)
                    }, "Research Grants", 10, ["onClick"]),
                    createVNode("button", {
                      class: ["abutton", { "selecttab": activetab.value === 3 }],
                      onClick: ($event) => setActiveTab(3)
                    }, "Research Publications", 10, ["onClick"]),
                    createVNode("button", {
                      class: ["abutton", { "selecttab": activetab.value === 4 }],
                      onClick: ($event) => setActiveTab(4)
                    }, "Patents", 10, ["onClick"]),
                    createVNode("button", {
                      class: ["abutton", { "selecttab": activetab.value === 5 }],
                      onClick: ($event) => setActiveTab(5)
                    }, "Tutorials", 10, ["onClick"]),
                    createVNode("button", {
                      class: ["abutton", { "selecttab": activetab.value === 6 }],
                      onClick: ($event) => setActiveTab(6)
                    }, "Demo Publications", 10, ["onClick"])
                  ]),
                  createVNode("div", { class: "dblp" }, [
                    createVNode("a", {
                      href: "https://dblp.org/pid/166/7652.html",
                      target: "_blank",
                      style: { "color": "#2F81FC" }
                    }, "[DBLP]"),
                    createTextVNode("  "),
                    createVNode("a", {
                      href: "https://scholar.google.com.hk/citations?user=b2AOUEEAAAAJ&hl=en",
                      target: "_blank",
                      style: { "color": "#2F81FC" }
                    }, "[Google Scholar]")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_col, {
                span: 12,
                xs: 24
              }, {
                default: withCtx(() => [
                  activetab.value === 1 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "atext"
                  }, [
                    createVNode("p", null, "IEEE Senior Member (Awarded in 2024)"),
                    createVNode("p", null, "National Science Fund for Excellent Young Scientists (Overseas) (国家海外优青) (Awarded in 2023)")
                  ])) : createCommentVNode("", true),
                  activetab.value === 2 ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "atext"
                  }, [
                    createVNode("p", null, 'PI: Shenzhen University Internal Grant 2024 (研究生优秀教材建设项目) "如何调整心态去撰写计算机科学论文？" (How to Change Your Mindset to Write Academic Papers in Computer Science?), 200,000 RMB'),
                    createVNode("p", null, 'PI: Start-up grant from Shenzhen City (B-grade) 2024 (孔雀计划科研启动经费B档) "快速地理信息系统算法" (Fast Algorithms for Geographic Information Systems), 5,000,000 RMB'),
                    createVNode("p", null, 'PI: SZU Additional Start-up Grant 2024 "大时空数据可视化" (Large-scale Spatiotemporal Data Visualization), 700,000 RMB'),
                    createVNode("p", null, 'PI: NSFC (Excellent Young Scientists (Overseas)) 2023 "地理时空大数据分析" (Large-scale Spatiotemporal Data Analytics), 1,000,000 - 3,000,000 RMB'),
                    createVNode("p", null, 'PI: SZU Start-up Grant 2023 "快速密度估计算法" (Fast Algorithms for Density Estimation), 300,000 RMB'),
                    createVNode("p", null, 'PI: NSFC 2022 "基于超快速算法的核密度估计" (Efficient Algorithms for Kernel Density Estimation), 300,000 RMB'),
                    createVNode("p", null, "PI: HKBU Internal Grant, 100,000 HKD"),
                    createVNode("p", null, "PI: HKBU Start-up Grant, 120,000 HKD")
                  ])) : createCommentVNode("", true),
                  activetab.value === 3 ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "atext"
                  }, [
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Pak Lon Ip, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu, Christian S. Jensen."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/empty.pdf",
                        target: "_blank"
                      }, "Large-scale Spatiotemporal Kernel Density Visualization"),
                      createVNode("br"),
                      createTextVNode(" IEEE International Conference on Data Engineering (ICDE), 2025. ")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Weike Tang, Dingming Wu, Tsz Nam Chan, Kezhong Lu."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/empty.pdf",
                        target: "_blank"
                      }, "Spatially Compact Dense Block Mining in Spatial Tensors"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of ACM Conference on Knowledge Discovery and Data Mining (SIGKDD), 2025. ")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Bo Guo, Zhihai Huang, Haitao Luo, Perpetual Hope Akwensi, Ruisheng Wang, Bo Huang, Tsz Nam Chan."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/Tunnel.pdf",
                        target: "_blank"
                      }, "An Enhanced Network for Extracting Tunnel Lining Defects using Transformer Encoder and Aggregate Decoder"),
                      createVNode("br"),
                      createTextVNode(" International Journal of Applied Earth Observation and Geoinformation (IJAEOG). ")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Bojian Zhu, Dingming Wu, Yun Peng, Leong Hou U."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/LARGE.pdf",
                        target: "_blank"
                      }, "LARGE: A Length-Aggregation-based Grid Structure for Line Density Visualization"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of the VLDB Endowment (PVLDB), 2024. (Presented in VLDB 2025) ")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/PageRank_Approx.pdf",
                        target: "_blank"
                      }, "Efficient and Accurate PageRank Approximation on Large Graphs"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of ACM Conference on Management of Data (SIGMOD), 2025."),
                      createVNode("br"),
                      createTextVNode(' Appear in the new ACM journal "Proceedings of the ACM on Management of Data (PACMMOD)". ')
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Pak Lon Ip, Shenghui Zhang, Xuekai Wei, Tsz Nam Chan, Leong Hou U."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/empty.pdf",
                        target: "_blank"
                      }, "HFGNN: Efficient Graph Neural Networks using Hub-Fringe Structures"),
                      createVNode("br"),
                      createTextVNode(" IEEE International Conference on Data Mining (ICDM), 2024. ")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Renchi Yang, Yidu Wu, Xiaoyang Lin, Qichen Wang, Tsz Nam Chan, Jieming Shi."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/ABG_clustering.pdf",
                        target: "_blank"
                      }, "Effective Clustering on Large Attributed Bipartite Graphs"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of ACM Conference on Knowledge Discovery and Data Mining (SIGKDD), 2024. ")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Rui Zang, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/LION.pdf",
                        target: "_blank"
                      }, "LION: Fast and High-Resolution Network Kernel Density Visualization"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of the VLDB Endowment (PVLDB), 2024. "),
                      createVNode("a", {
                        href: "https://github.com/edisonchan2013928/LION",
                        target: "_blank"
                      }, "(Code)"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/LION.pptx",
                        target: "_blank"
                      }, "(Powerpoint Presentation)"),
                      createTextVNode(),
                      createVNode("a", { href: "https://edisonchan-szu.github.io/publication/LION_Poster.pptx" }, "(Poster Presentation)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Shunran Zhang, Xiubo Zhang, Tsz Nam Chan, Shenghui Zhang, Leong Hou U."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/EMD_shape_loss.pdf",
                        target: "_blank"
                      }, "A Computation-aware Shape Loss Function for Point Cloud Completion"),
                      createVNode("br"),
                      createTextVNode(" Annual AAAI Conference on Artificial Intelligence (AAAI), 2024. "),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/Point_Cloud_Completion_AAAI24.pdf",
                        target: "_blank"
                      }, " (Poster Presentation)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Zhe Li, Leong Hou U, Reynold Cheng."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/PLAME.pdf",
                        target: "_blank"
                      }, "PLAME: Piecewise-Linear Approximate Measure for Additive Kernel SVM"),
                      createVNode("br"),
                      createTextVNode(" IEEE Transactions on Knowledge and Data Engineering (TKDE). "),
                      createVNode("a", {
                        href: "https://github.com/edisonchan2013928/PLAME-Code",
                        target: "_blank"
                      }, "(Code)"),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/PLAME_TKDE_poster.pdf",
                        target: "_blank"
                      }, "Extended abstract"),
                      createTextVNode(" in IEEE International Conference on Data Engineering (ICDE), 2024. "),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/PLAME_Poster.pdf",
                        target: "_blank"
                      }, "(Poster Presentation)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Yun Peng, Byron Choi, Tsz Nam Chan, Jianye Yang, Jianliang Xu."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/tau-MNG.pdf",
                        target: "_blank"
                      }, "Efficient Approximate Nearest Neighbor Search in Multi-dimensional Databases"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. "),
                      createVNode("a", {
                        href: "https://github.com/csypeng/taumng_sigmod",
                        target: "_blank"
                      }, "(Code)"),
                      createTextVNode(" (Short Video)"),
                      createVNode("br"),
                      createTextVNode(' Appear in the new ACM journal "Proceedings of the ACM on Management of Data (PACMMOD)". ')
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Leong Hou U, Yun Peng, Byron Choi, Jianliang Xu."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/Network-K-function.pdf",
                        target: "_blank"
                      }, "Fast Network K-function-based Spatial Analysis"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of the VLDB Endowment (PVLDB), 2022. "),
                      createVNode("a", {
                        href: "https://github.com/edisonchan2013928/Network-K-function",
                        target: "_blank"
                      }, "(Code)"),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/Network K-function.mp4",
                        target: "_blank"
                      }, "(Video Presentation)"),
                      createTextVNode(),
                      createVNode("a", { href: "https://edisonchan-szu.github.io/publication/Network K-function.pptx" }, "(Powerpoint Presentation)"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/network_K_function_TR.pdf",
                        target: "_blank"
                      }, "(Technical Report)"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/Network_K_function_Poster.pdf",
                        target: "_blank"
                      }, "(Poster Presentation)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Jie Chen, Zaifeng Yang, Tsz Nam Chan, Hui Li, Junhui Hou, Lap-Pui Chau."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://ieeexplore.ieee.org/abstract/document/9740005",
                        target: "_blank"
                      }, "Attention-Guided Progressive Neural Texture Fusion for High Dynamic Range Image Restoration"),
                      createVNode("br"),
                      createTextVNode(" IEEE Transactions on Image Processing (TIP). ")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Yun Peng, Byron Choi, Tsz Nam Chan, Jianliang Xu."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/LAN.pdf",
                        target: "_blank"
                      }, "LAN: Learning-based Approximate k-Nearest Neighbor Search in Graph Databases"),
                      createVNode("br"),
                      createTextVNode(" IEEE International Conference on Data Engineering (ICDE), 2022. "),
                      createVNode("a", {
                        href: "https://github.com/csypeng/LAN",
                        target: "_blank"
                      }, "(Code)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/SLAM.pdf",
                        target: "_blank"
                      }, "SLAM: Efficient Sweep Line Algorithms for Kernel Density Visualization"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of ACM Conference on Management of Data (SIGMOD), 2022. "),
                      createVNode("a", {
                        href: "https://github.com/edisonchan2013928/SLAM",
                        target: "_blank"
                      }, "(Code)"),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://www.youtube.com/watch?v=aOl0RigDuAg",
                        target: "_blank"
                      }, "(Video Presentation)"),
                      createTextVNode(),
                      createVNode("a", { href: "https://edisonchan-szu.github.io/publication/SLAM_presentation_v2.pptx" }, "(Powerpoint Presentation)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Pak Lon Ip, Leong Hou U, Byron Choi, Jianliang Xu."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/SWS.pdf",
                        target: "_blank"
                      }, "SWS: A Complexity-Optimized Solution for Spatial-Temporal Kernel Density Visualization"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of the VLDB Endowment (PVLDB), 2022. "),
                      createVNode("a", {
                        href: "https://github.com/STKDV/STKDV",
                        target: "_blank"
                      }, "(Code)"),
                      createVNode("br"),
                      createVNode("a", { href: "https://edisonchan-szu.github.io/publication/SWS.mp4" }, "(Video Presentation)"),
                      createTextVNode(),
                      createVNode("a", { href: "https://edisonchan-szu.github.io/publication/SWS.pptx" }, "(Powerpoint Presentation)"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/SWS_STKDV_TR.pdf",
                        target: "_blank"
                      }, "(Technical Report)"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/SWS_Poster.pdf",
                        target: "_blank"
                      }, "(Poster Presentation)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Pak Lon Ip, Leong Hou U, Byron Choi, Jianliang Xu."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/SAFE.pdf",
                        target: "_blank"
                      }, "SAFE: A Share-and-Aggregate Bandwidth Exploration Framework for Kernel Density Visualization"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of the VLDB Endowment (PVLDB), 2022. "),
                      createVNode("a", {
                        href: "https://github.com/edisonchan2013928/SAFE",
                        target: "_blank"
                      }, "(Code)"),
                      createVNode("br"),
                      createVNode("a", { href: "https://edisonchan-szu.github.io/publication/SAFE.mp4" }, "(Video Presentation)"),
                      createTextVNode(),
                      createVNode("a", { href: "https://edisonchan-szu.github.io/publication/SAFE.pptx" }, "(Powerpoint Presentation)"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/SAFE_Poster.pdf",
                        target: "_blank"
                      }, "(Poster Presentation)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Zhe Li, Man Lung Yiu, Tsz Nam Chan."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/PAW.pdf",
                        target: "_blank"
                      }, "PAW: Data Partitioning Meets Workload Variance"),
                      createVNode("br"),
                      createTextVNode(" IEEE International Conference on Data Engineering (ICDE), 2022. "),
                      createVNode("a", {
                        href: "https://github.com/cloudray8580/NORA_Simulation",
                        target: "_blank"
                      }, "(Simulation Code)"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://github.com/cloudray8580/NORA_SPARK",
                        target: "_blank"
                      }, "(Spark Code)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Zhe Li, Leong Hou U, Jianliang Xu, Reynold Cheng."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/NKDV.pdf",
                        target: "_blank"
                      }, "Fast Augmentation Algorithms for Network Kernel Density Visualization"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of the VLDB Endowment (PVLDB), 2021. "),
                      createVNode("a", {
                        href: "https://github.com/edisonchan2013928/Network-Kernel-Density-Visualization-NKDV-Code",
                        target: "_blank"
                      }, "(Code)"),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://www.youtube.com/watch?v=CHnepJYxnRA&feature=youtu.be",
                        target: "_blank"
                      }, "(Video Presentation)"),
                      createTextVNode(),
                      createVNode("a", { href: "https://edisonchan-szu.github.io/publication/NKDV_PVLDB_v2.pptx" }, "(Powerpoint Presentation)"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/Remark_NKDV.txt",
                        target: "_blank"
                      }, "(Remark)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Zhe Li, Tsz Nam Chan, Man Lung Yiu, Christian S. Jensen."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/PolyFit.pdf",
                        target: "_blank"
                      }, "PolyFit: Polynomial-based Indexing Approach for Fast Approximate Range Aggregate Queries"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of International Conference on Extending Database Technology (EDBT), 2021. ")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Hui Li, Tsz Nam Chan, Xianbiao Qi, Wuyuan Xie."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/MESPD_Final.pdf",
                        target: "_blank"
                      }, "Detail-Preserving Multi-Exposure Fusion with Edge-Preserving Structural Patch Decomposition"),
                      createVNode("br"),
                      createTextVNode(" IEEE Transactions on Circuits and Systems for Video Technology (TCSVT). "),
                      createVNode("a", {
                        href: "https://github.com/xiaohuiben/MESPD_TCSVT-2021",
                        target: "_blank"
                      }, "(Code)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Zichen Zhu, Tsz Nam Chan, Reynold Cheng, Loc Do, Zhipeng Huang, Haoci Zhang."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://ieeexplore.ieee.org/document/9253703",
                        target: "_blank"
                      }, "Effective and Efficient Discovery of Top-k Meta Paths in Heterogeneous Information Networks"),
                      createVNode("br"),
                      createTextVNode(" IEEE Transactions on Knowledge and Data Engineering (TKDE). "),
                      createVNode("a", {
                        href: "https://github.com/littlepig2013/topk-meta-path-query",
                        target: "_blank"
                      }, "(Code)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Leong Hou U, Reynold Cheng, Man Lung Yiu, Shivansh Mittal."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/KARL_AK.pdf",
                        target: "_blank"
                      }, "Efficient Algorithms for Kernel Aggregation Queries"),
                      createVNode("br"),
                      createTextVNode(" IEEE Transactions on Knowledge and Data Engineering (TKDE). "),
                      createVNode("a", {
                        href: "https://github.com/edisonchan2013928/Fast-Prediction-for-Additive-Kernels-Using-KARL",
                        target: "_blank"
                      }, "(Code)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Reynold Cheng, Man Lung Yiu."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/QUAD.pdf",
                        target: "_blank"
                      }, "QUAD: Quadratic-Bound-based Kernel Density Visualization"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of ACM Conference on Management of Data (SIGMOD), 2020. "),
                      createVNode("a", {
                        href: "https://github.com/edisonchan2013928/QUAD-for-Kernel-Density-Visualization-KDV-",
                        target: "_blank"
                      }, "(Code)"),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://www.youtube.com/watch?v=4-3pYkPbgBo&feature=youtu.be",
                        target: "_blank"
                      }, "(Video Presentation)"),
                      createTextVNode(),
                      createVNode("a", { href: "https://edisonchan-szu.github.io/publication/QUAD_presentation_v5.pptx" }, "(Powerpoint Presentation)"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://www.cs.hku.hk/data/techreps/document/TR-2019-05.pdf",
                        target: "_blank"
                      }, "(Technical Report)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://ira.lib.polyu.edu.hk/handle/10397/80535",
                        target: "_blank"
                      }, "Similarity Measures: Algorithms and Applications"),
                      createVNode("br"),
                      createTextVNode(" PhD Thesis. ")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Man Lung Yiu, Leong Hou U."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/EMD.pdf",
                        target: "_blank"
                      }, "The Power of Bounds: Answering Approximate Earth Mover's Distance with Parametric Bounds"),
                      createVNode("br"),
                      createTextVNode(" IEEE Transactions on Knowledge and Data Engineering (TKDE). "),
                      createVNode("a", {
                        href: "https://github.com/edisonchan2013928/EMD_Code",
                        target: "_blank"
                      }, "(Code)"),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/EMD_extended_abstract.pdf",
                        target: "_blank"
                      }, "Extended abstract"),
                      createTextVNode(" in IEEE International Conference on Data Engineering (ICDE), 2020. "),
                      createVNode("a", {
                        href: "https://www.youtube.com/watch?v=Zgov0uNxZQ4",
                        target: "_blank"
                      }, "(Video Presentation)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Man Lung Yiu, Leong Hou U."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/KARL.pdf",
                        target: "_blank"
                      }, "KARL: Fast Kernel Aggregation Queries"),
                      createVNode("br"),
                      createTextVNode(" IEEE International Conference on Data Engineering (ICDE), 2019. "),
                      createVNode("a", {
                        href: "https://github.com/edisonchan2013928/KARL-Fast-Kernel-Aggregation-Queries",
                        target: "_blank"
                      }, "(Code)"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/KARL_Poster.pdf",
                        target: "_blank"
                      }, "(Poster Presentation)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Man Lung Yiu, Kien A. Hua."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/Matrix_NN.pdf",
                        target: "_blank"
                      }, "Efficient Sub-Window Nearest Neighbor Search on Matrix"),
                      createVNode("br"),
                      createTextVNode(" IEEE Transactions on Knowledge and Data Engineering (TKDE). ")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Hui Li, Tsz Nam Chan, Man Lung Yiu, Nikos Mamoulis."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/FEXIPRO.pdf",
                        target: "_blank"
                      }, "FEXIPRO: Fast and Exact Inner Product Retrieval in Recommender Systems"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of ACM Conference on Management of Data (SIGMOD), 2017. "),
                      createVNode("a", {
                        href: "https://github.com/Hui-Li/MFRetrieval",
                        target: "_blank"
                      }, "(Code)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Man Lung Yiu, Kien A. Hua."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/Matrix_NN_conf.pdf",
                        target: "_blank"
                      }, "A Progressive Approach for Similarity Search on Matrix"),
                      createVNode("br"),
                      createTextVNode(" International Symposium on Spatial and Temporal Databases (SSTD), 2015. ")
                    ])
                  ])) : createCommentVNode("", true),
                  activetab.value === 4 ? (openBlock(), createBlock("div", {
                    key: 3,
                    class: "atext"
                  }, [
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Pak Lon Ip, , Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu, Christian S. Jensen."),
                      createVNode("br"),
                      createTextVNode(" A Method, System, and Terminal for Spatiotemporal Kernel Density Visualization via PREFIX-Matrix Structure. (一种基于前缀矩阵的时空核密度可视化方法、系统及终端)"),
                      createVNode("br"),
                      createTextVNode(" Chinese Patent "),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/PREFIX_patent_protected.pdf",
                        target: "_blank"
                      }, "(Protected (if granted)"),
                      createTextVNode(" starting from 31st December 2024) ")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Bojian Zhu, Dingming Wu, Yun Peng, Leong Hou U."),
                      createVNode("br"),
                      createTextVNode(" A Method and System for Generating Line Density Visualization via Length-Aggregation-based Grid Structure. (一种基于长度聚合的网格结构生成线密度的方法及系统)"),
                      createVNode("br"),
                      createTextVNode(" Chinese Patent "),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/LARGE_granted.pdf",
                        target: "_blank"
                      }, "(Granted)"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/LARGE_patent_protected.pdf",
                        target: "_blank"
                      }, "(Protected"),
                      createTextVNode(" starting from 30th October 2024) ")
                    ])
                  ])) : createCommentVNode("", true),
                  activetab.value === 5 ? (openBlock(), createBlock("div", {
                    key: 4,
                    class: "atext"
                  }, [
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/LSGA_tutorial.pdf",
                        target: "_blank"
                      }, "Large-scale Geospatial Analytics: Problems, Challenges, and Opportunities"),
                      createTextVNode(" (1.5 hours)"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. "),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/SIGMOD23-Tutorial-short-video.mp4",
                        target: "_blank"
                      }, "(Short Video)"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://github.com/edisonchan2013928/Tutorial-slides/blob/main/LSGA_SIGMOD2023_Tutorial.pdf",
                        target: "_blank"
                      }, "(Tutorial Slides)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Leong Hou U, Byron Choi, Jianliang Xu, Reynold Cheng."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/KDV_tutorial.pdf",
                        target: "_blank"
                      }, "Kernel Density Visualization for Big Geospatial Data: Algorithms and Applications"),
                      createTextVNode(" (1.5 hours)"),
                      createVNode("br"),
                      createTextVNode(" IEEE International Conference on Mobile Data Management (MDM), 2023. "),
                      createVNode("a", {
                        href: "https://github.com/edisonchan2013928/Tutorial-slides/blob/main/KDV_tutorial_slides.pptx",
                        target: "_blank"
                      }, "(Tutorial Slides)")
                    ])
                  ])) : createCommentVNode("", true),
                  activetab.value === 6 ? (openBlock(), createBlock("div", {
                    key: 5,
                    class: "atext"
                  }, [
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Rui Zang, Pak Lon Ip, Leong Hou U, Jianliang Xu."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/PyNKDV.pdf",
                        target: "_blank"
                      }, "PyNKDV: An Efficient Network Kernel Density Visualization Library for Geospatial Analytic Systems"),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://github.com/edisonchan2013928/PyNKDV",
                        target: "_blank"
                      }, "(Library Homepage)"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of ACM Conference on Management of Data (SIGMOD), 2023. "),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/SIGMOD23-Demo-short-video.mp4",
                        target: "_blank"
                      }, "(Short Video)"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/PyNKDV_poster.pdf",
                        target: "_blank"
                      }, "(Poster Presentation)")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Pak Lon Ip, Kaiyan Zhao, Leong Hou U, Byron Choi, Jianliang Xu."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/LIBKDV.pdf",
                        target: "_blank"
                      }, "LIBKDV: A Versatile Kernel Density Visualization Library for Geospatial Analytics"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://github.com/libkdv/libkdv",
                        target: "_blank"
                      }, "(Library Homepage)"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of the VLDB Endowment (PVLDB), 2022. "),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/system/Video/LIBKDV_Video_final.mp4",
                        target: "_blank"
                      }, "(Video Presentation)"),
                      createVNode("br"),
                      createTextVNode(" Impact case 1: Used in the Macau COVID-19 HotSpot Map "),
                      createVNode("a", {
                        href: "https://degroup.cis.um.edu.mo/covid-19/",
                        target: "_blank"
                      }, "(Project Website)"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://www.einnews.com/pr_news/581503973/um-covid-19-research-team-proposes-key-points-for-combating-epidemic",
                        target: "_blank"
                      }, "(News)"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://www.tdm.com.mo/zh-hant/news-detail/718799?date=",
                        target: "_blank"
                      }, "(Video News (in Cantonese))"),
                      createVNode("br"),
                      createTextVNode(" Impact case 2: Used in the Hong Kong COVID-19 HotSpot Map "),
                      createVNode("a", {
                        href: "https://covid19.comp.hkbu.edu.hk/",
                        target: "_blank"
                      }, "(Project Website)"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://www.thestandard.com.hk/breaking-news/section/4/197114/HKBU-led-research-team-launches-Hong-Kong-COVID-19-hotspot-map",
                        target: "_blank"
                      }, "(News)"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://hk.on.cc/hk/bkn/cnt/news/20221114/bkn-20221114134328250-1114_00822_001.html",
                        target: "_blank"
                      }, "(News (in Chinese))")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("Tsz Nam Chan, Pak Lon Ip, Leong Hou U, Weng Hou Tong, Shivansh Mittal, Ye Li, Reynold Cheng."),
                      createVNode("br"),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/publication/KDV-Explorer.pdf",
                        target: "_blank"
                      }, "KDV-Explorer: A Near Real-Time Kernel Density Visualization System for Spatial Analysis"),
                      createTextVNode(),
                      createVNode("a", {
                        href: "https://edisonchan-szu.github.io/system/KDV-Explorer.html",
                        target: "_blank"
                      }, "(Project Homepage)"),
                      createVNode("br"),
                      createTextVNode(" Proceedings of the VLDB Endowment (PVLDB), 2021. "),
                      createVNode("a", {
                        href: "https://www.youtube.com/watch?v=cHoILdTuz_o&feature=youtu.be",
                        target: "_blank"
                      }, "(Video Presentation)")
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="ps" data-v-efdc73de><div class="pstitle" data-v-efdc73de><img${ssrRenderAttr("src", _imports_5$1)} alt="" class="pellipse" data-v-efdc73de><p class="ptitle" data-v-efdc73de>Professional Services</p><div class="pline1" data-v-efdc73de></div><div class="pline2" data-v-efdc73de></div></div><table style="${ssrRenderStyle({ "border-collapse": "separate", "border-spacing": "0px 24px" })}" data-v-efdc73de><tbody data-v-efdc73de><tr data-v-efdc73de><td class="tdtitle" data-v-efdc73de>Major Service Award</td><td class="tdtext" data-v-efdc73de><p data-v-efdc73de>Recognition of Outstanding Reviewer in SIGKDD 2025 (2024 Aug Cycle)</p><p data-v-efdc73de>Outstanding Reviewer Award in IEEE International Conference on Data Engineering (ICDE) 2024</p></td></tr><tr data-v-efdc73de><td class="tdtitle" data-v-efdc73de>Journal Referee</td><td class="tdtext" data-v-efdc73de><p data-v-efdc73de>The International Journal on Very Large Data Bases (VLDBJ)</p><p data-v-efdc73de>IEEE Transactions on Knowledge and Data Engineering (TKDE)</p><p data-v-efdc73de>Artificial Intelligence Journal (AIJ)</p><p data-v-efdc73de>IEEE Transactions on Computers (TC)</p><p data-v-efdc73de>World Wide Web Journal (WWWJ)</p>`);
      if (showjr.value) {
        _push(`<p data-v-efdc73de>ACM Transactions on Spatial Algorithms and Systems (TSAS)</p>`);
      } else {
        _push(`<!---->`);
      }
      if (showjr.value) {
        _push(`<p data-v-efdc73de>SoftwareX Journal</p>`);
      } else {
        _push(`<!---->`);
      }
      if (showjr.value) {
        _push(`<p data-v-efdc73de>Pattern Recognition (PR)</p>`);
      } else {
        _push(`<!---->`);
      }
      if (showjr.value) {
        _push(`<p data-v-efdc73de>Data and Knowledge Engineering (DKE)</p>`);
      } else {
        _push(`<!---->`);
      }
      if (showjr.value) {
        _push(`<p data-v-efdc73de>Digital Signal Processing (DSP)</p>`);
      } else {
        _push(`<!---->`);
      }
      if (showjr.value) {
        _push(`<p data-v-efdc73de>Journal of Computer Science and Technology (JCST)</p>`);
      } else {
        _push(`<!---->`);
      }
      if (showjr.value) {
        _push(`<p data-v-efdc73de>The Journal of Supercomputing</p>`);
      } else {
        _push(`<!---->`);
      }
      if (showjr.value) {
        _push(`<p data-v-efdc73de>Cities Journal</p>`);
      } else {
        _push(`<!---->`);
      }
      if (showjr.value) {
        _push(`<p data-v-efdc73de>Remote Sensing Journal</p>`);
      } else {
        _push(`<!---->`);
      }
      if (showjr.value) {
        _push(`<p data-v-efdc73de>Engineering Applications of Artificial Intelligence Journal</p>`);
      } else {
        _push(`<!---->`);
      }
      if (showjr.value) {
        _push(`<p data-v-efdc73de>Sensors Journal</p>`);
      } else {
        _push(`<!---->`);
      }
      if (showjr.value) {
        _push(`<p data-v-efdc73de>Entropy Journal</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="showjrbutton" data-v-efdc73de>${ssrInterpolate(showjr.value ? "FOLD" : "MORE")} `);
      if (showjr.value) {
        _push(`<img${ssrRenderAttr("src", _imports_4)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "10px" })}" data-v-efdc73de>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_5)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "10px" })}" data-v-efdc73de>`);
      }
      _push(`</button></td></tr><tr data-v-efdc73de><td class="tdtitle" data-v-efdc73de>Conference Program Organizer</td><td class="tdtext" data-v-efdc73de><p data-v-efdc73de>International Conference on Mobile Data Management (MDM) Year: 2021 to 2024 proceedings chair</p></td></tr><tr data-v-efdc73de><td class="tdtitle" data-v-efdc73de>Conference Program Committee/Reviewer</td><td class="tdtext" data-v-efdc73de><p data-v-efdc73de>International Conference on Very Large Data Bases (VLDB) Year: 2022 to 2024 (demo), 2025 (research)</p><p data-v-efdc73de>IEEE International Conference on Data Engineering (ICDE) Year: 2022, 2024, 2025</p><p data-v-efdc73de>Proceedings of International Conference on Extending Database Technology (EDBT) Year: 2023</p><p data-v-efdc73de>Special Interest Group on Knowledge Discovery and Data Mining (SIGKDD) Year: 2024, 2025</p><p data-v-efdc73de>International Joint Conference on Artificial Intelligence (IJCAI) Year: 2020</p>`);
      if (showcpc.value) {
        _push(`<p data-v-efdc73de>International Conference on Scientific and Statistical Database Management (SSDBM) Year: 2024</p>`);
      } else {
        _push(`<!---->`);
      }
      if (showcpc.value) {
        _push(`<p data-v-efdc73de>Asian Conference on Machine Learning (ACML) Year: 2024</p>`);
      } else {
        _push(`<!---->`);
      }
      if (showcpc.value) {
        _push(`<p data-v-efdc73de>International Conference on Database Systems for Advanced Applications (DASFAA) Year: 2021 to 2024</p>`);
      } else {
        _push(`<!---->`);
      }
      if (showcpc.value) {
        _push(`<p data-v-efdc73de>International Conference on Web Information Systems Engineering (WISE) Year: 2019 to 2024</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="showcpcbutton" data-v-efdc73de>${ssrInterpolate(showcpc.value ? "FOLD" : "MORE")} `);
      if (showcpc.value) {
        _push(`<img${ssrRenderAttr("src", _imports_4)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "10px" })}" data-v-efdc73de>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_5)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "10px" })}" data-v-efdc73de>`);
      }
      _push(`</button></td></tr><tr data-v-efdc73de><td class="tdtitle" data-v-efdc73de>Conference Program Session Chair</td><td class="tdtext" data-v-efdc73de><p data-v-efdc73de>International Conference on Very Large Data Bases (VLDB) Year: 2020, 2022</p><p data-v-efdc73de>IEEE International Conference on Data Engineering (ICDE) Year: 2021, 2024</p><p data-v-efdc73de>International Joint Conference on Web and Big Data (APWeb-WAIM) Year: 2021</p><p data-v-efdc73de>International Conference on Web Information Systems Engineering (WISE) Year: 2021</p></td></tr></tbody><colgroup data-v-efdc73de><col data-v-efdc73de><col data-v-efdc73de></colgroup></table></div><div class="teaching" data-v-efdc73de><div class="teachingtitle" data-v-efdc73de><img${ssrRenderAttr("src", _imports_6)} alt="" class="tellipse" data-v-efdc73de><p class="ptitle" data-v-efdc73de>Teaching</p><div class="pline1" data-v-efdc73de></div><div class="pline2" data-v-efdc73de></div></div><div class="card" data-v-efdc73de><div class="course" data-v-efdc73de><p class="ctitle" data-v-efdc73de>Courses</p><div class="ctext" data-v-efdc73de><p data-v-efdc73de>SZU Professional English (for PhD Students) (Spring 2024)</p><p data-v-efdc73de>SZU Software Testing (Spring 2024)</p><p data-v-efdc73de>HKBU COMP 7640 Database Systems and Administration (Spring 2023)</p><p data-v-efdc73de>HKBU COMP 7930 Big Data Analytics (Spring 2021, Spring 2022)</p><p data-v-efdc73de>HKBU COMP 4035 Database System Implementation (Fall 2020, Fall 2021, Fall 2022)</p></div><button class="more1" style="${ssrRenderStyle({ "display": "flex" })}" data-v-efdc73de> MORE <img${ssrRenderAttr("src", _imports_7)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-efdc73de></button></div><div class="at" data-v-efdc73de><p class="ctitle" data-v-efdc73de>Academic Talks</p><div class="ctext" data-v-efdc73de><p data-v-efdc73de>What Should You Think to Perfectly Present Research Papers? (November 2024), Duke Kunshan University (China)</p><p data-v-efdc73de>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (November 2024), Hangzhou Dianzi University (China)</p><p data-v-efdc73de>LION: Fast and High-Resolution Network Kernel Density Visualization (November 2024), Zhejiang University of Science and Technology (China)</p><p data-v-efdc73de>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (October 2024), Hong Kong University of Science and Technology (Guangzhou) (China)</p><p data-v-efdc73de>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (October 2024), Guangzhou University (China)</p><p data-v-efdc73de>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (December 2023), Zhejiang University of Science and Technology (China)</p><p data-v-efdc73de>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (April 2023), Nanyang Technological University (Singapore)</p><p data-v-efdc73de>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (December 2022), Shandong University (China)</p><p data-v-efdc73de>A Complexity-Optimized Solution for Large-scale Kernel Density Visualization (December 2022), Shenzhen University (China)</p></div><button class="more2" style="${ssrRenderStyle({ "display": "flex" })}" data-v-efdc73de> MORE <img${ssrRenderAttr("src", _imports_7)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-efdc73de></button></div><div class="tutorials" data-v-efdc73de><p class="ctitle" data-v-efdc73de>Students</p><div class="ctext" data-v-efdc73de><p data-v-efdc73de>Hongwei Ye, master student in SZU (Cosupervised with Prof. Joshua Zhexue Huang)</p><p data-v-efdc73de>Yue Zhong, master student in SZU (Cosupervised with Prof. Joshua Zhexue Huang)</p><p data-v-efdc73de>Bojian Zhu, undergraduate research assistant in HKBU (From June 2023 to August 2024) (Coauthored two VLDB papers with me)</p><p data-v-efdc73de>Rui Zang, undergraduate research assistant in HKBU (From May 2023 to July 2023) (Coauthored one VLDB paper and one SIGMOD demo paper with me)</p></div><button class="more3" style="${ssrRenderStyle({ "display": "flex" })}" data-v-efdc73de> MORE <img${ssrRenderAttr("src", _imports_7)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-efdc73de></button></div></div><div id="overlay" class="overlay" data-v-efdc73de></div>`);
      if (teachingcard.value === 1) {
        _push(`<div class="coursebig" data-v-efdc73de><p class="titlebig" data-v-efdc73de>Course</p><div class="textbig" data-v-efdc73de><p data-v-efdc73de>SZU Professional English (for PhD Students) (Spring 2024)</p><p data-v-efdc73de>SZU Software Testing (Spring 2024)</p><p data-v-efdc73de>HKBU COMP 7640 Database Systems and Administration (Spring 2023)</p><p data-v-efdc73de>HKBU COMP 7930 Big Data Analytics (Spring 2021, Spring 2022)</p><p data-v-efdc73de>HKBU COMP 4035 Database System Implementation (Fall 2020, Fall 2021, Fall 2022)</p></div><button class="fold" style="${ssrRenderStyle({ "display": "flex" })}" data-v-efdc73de> FOLD <img${ssrRenderAttr("src", _imports_8)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-efdc73de></button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (teachingcard.value === 2) {
        _push(`<div class="coursebig" data-v-efdc73de><p class="titlebig" data-v-efdc73de>Academic Talks</p><div class="textbig" data-v-efdc73de><p data-v-efdc73de>What Should You Think to Perfectly Present Research Papers? (November 2024), Duke Kunshan University (China)</p><p data-v-efdc73de>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (November 2024), Hangzhou Dianzi University (China)</p><p data-v-efdc73de>LION: Fast and High-Resolution Network Kernel Density Visualization (November 2024), Zhejiang University of Science and Technology (China)</p><p data-v-efdc73de>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (October 2024), Hong Kong University of Science and Technology (Guangzhou) (China)</p><p data-v-efdc73de>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (October 2024), Guangzhou University (China)</p><p data-v-efdc73de>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (December 2023), Zhejiang University of Science and Technology (China)</p><p data-v-efdc73de>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (April 2023), Nanyang Technological University (Singapore)</p><p data-v-efdc73de>Complexity-Optimized Algorithms for Large-scale Kernel Density Visualization (December 2022), Shandong University (China)</p><p data-v-efdc73de>A Complexity-Optimized Solution for Large-scale Kernel Density Visualization (December 2022), Shenzhen University (China)</p></div><button class="fold" style="${ssrRenderStyle({ "display": "flex" })}" data-v-efdc73de> FOLD <img${ssrRenderAttr("src", _imports_8)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-efdc73de></button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (teachingcard.value === 3) {
        _push(`<div class="coursebig" data-v-efdc73de><p class="titlebig" data-v-efdc73de>Students</p><div class="textbig" data-v-efdc73de><p data-v-efdc73de>Hongwei Ye, master student in SZU (Cosupervised with Prof. Joshua Zhexue Huang)</p><p data-v-efdc73de>Yue Zhong, master student in SZU (Cosupervised with Prof. Joshua Zhexue Huang)</p><p data-v-efdc73de>Bojian Zhu, undergraduate research assistant in HKBU (From June 2023 to August 2024) (Coauthored two VLDB papers with me)</p><p data-v-efdc73de>Rui Zang, undergraduate research assistant in HKBU (From May 2023 to July 2023) (Coauthored one VLDB paper and one SIGMOD demo paper with me)</p></div><button class="fold" style="${ssrRenderStyle({ "display": "flex" })}" data-v-efdc73de> FOLD <img${ssrRenderAttr("src", _imports_8)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-efdc73de></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="end" data-v-efdc73de><p class="endtitle" data-v-efdc73de>How to be Productive in Research?</p><p class="endtext" data-v-efdc73de>If you want to be productive in research, you need to read this document (by Prof. Dimitris Papadias in HKUST), read this Zhihu blog (written in Chinese), and watch this video (by Prof. Baochun Li in the University of Toronto).</p></div><p class="welcome" data-v-efdc73de>Welcome to the Data Management &amp; Intelligence Group in Shenzhen University (SZU).</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chan = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-efdc73de"]]);
export {
  chan as default
};
//# sourceMappingURL=chan-BB4fFrtp.js.map
