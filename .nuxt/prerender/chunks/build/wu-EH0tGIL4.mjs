import { _ as _imports_0, a as _imports_1, b as _imports_4, c as _imports_5, d as _imports_6, e as _imports_7, f as _imports_8, E as ElImage, g as ElRow, h as ElCol } from './fonts-FA0wcNt6.mjs';
import { _ as _imports_3 } from './virtual_public-BRi5M4s0.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode } from 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/vue@3.5.13_typescript@5.7.2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrRenderClass } from 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/vue@3.5.13_typescript@5.7.2/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_2 } from './virtual_public-OIGxJp94.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/lodash-unified@1.0.3_@types+lodash-es@4.17.12_lodash-es@4.17.21_lodash@4.17.21/node_modules/lodash-unified/import.js';
import './server.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/vue-bundle-renderer@2.1.1/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/h3@1.13.0/node_modules/h3/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/devalue@5.1.1/node_modules/devalue/index.js';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/@unhead+ssr@1.11.13/node_modules/@unhead/ssr/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/unenv@1.10.0/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/ufo@1.5.4/node_modules/ufo/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/unstorage@1.13.1_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/unstorage@1.13.1_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/unstorage@1.13.1_ioredis@5.4.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/unstorage@1.13.1_ioredis@5.4.1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/ohash@1.1.4/node_modules/ohash/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/unhead@1.11.13/node_modules/unhead/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/@unhead+shared@1.11.13/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/pinia@2.3.0_typescript@5.7.2/node_modules/pinia/dist/pinia.prod.cjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/vue-router@4.5.0_vue@3.5.13/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/@vue+shared@3.5.13/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/cookie-es@1.2.2/node_modules/cookie-es/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "wu",
  __ssrInlineRender: true,
  setup(__props) {
    const activetab = ref(1);
    const teachingcard = ref(0);
    const setActiveTab = (id) => {
      activetab.value = id;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_image = ElImage;
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg" }, _attrs))} data-v-1a58729b><div class="top" data-v-1a58729b><div class="topcontainer" data-v-1a58729b><div class="tname" data-v-1a58729b>Dingming Wu</div><div class="tintro" data-v-1a58729b>Associate Professor<br data-v-1a58729b>College of Computer Science and Software Engineering Shenzhen University</div><div class="tlocation" data-v-1a58729b><img${ssrRenderAttr("src", _imports_0)} alt="" class="icon_address" data-v-1a58729b><span class="locationtext" data-v-1a58729b>Zhiteng Building 618-2</span></div><div class="temail" data-v-1a58729b><img${ssrRenderAttr("src", _imports_1)} alt="" class="icon_email" data-v-1a58729b><span class="emailtext" data-v-1a58729b>dingming@szu.edu.cn</span></div><img${ssrRenderAttr("src", _imports_2)} alt="" class="teacherimg" data-v-1a58729b></div></div><p class="text" data-v-1a58729b> I obtained my Ph.D. degree in Computer Science from Aalborg University, Denmark in 2011. I received my Master degree in Computer Science from Peking University, China in 2008 and my Bachelor degree in Computer Science from Huazhong University of Science &amp; Techology, China in 2005. I am looking for strong applicants for Postdocs, Ph.D. and Master students. Applicants may have good background in (but not limited to) mathematics, algorithms and programming. Priorities are given to those who have backgrounds on data management or data mining. </p><div class="research" data-v-1a58729b><div class="rtitle" data-v-1a58729b><img${ssrRenderAttr("src", _imports_3)} alt="" class="rellipse" data-v-1a58729b><p class="title" data-v-1a58729b>Research</p><div class="rline1" data-v-1a58729b></div><div class="rline2" data-v-1a58729b></div></div><p class="ri" data-v-1a58729b>Research Interests</p><div class="rifield" data-v-1a58729b><p class="ritext" data-v-1a58729b> My general research area is data management. Recently, much of my research concerns problems from geo-textual, geo-social network, and large graph data, including data analytics, approximation algorithms, data modeling, query languages, query processing, and data mining. </p></div><p class="Selected-projects" data-v-1a58729b>Selected projects</p><div class="group" data-v-1a58729b><p class="gtitle" data-v-1a58729b>Efficient and Accurate PageRank Approximation on Large Graphs</p><p class="gintro" data-v-1a58729b>PageRank is a commonly used measurement in a wide range of applications, including search engines, recommendation systems, and social networks. However, this measurement suffers from huge computational overhead, which cannot be scaled to large graphs. Although many approximate algorithms have been proposed for computing PageRank values, these algorithms are either (i) not efficient or (ii) not accurate. Worse still, some of them cannot provide estimated PageRank values for all the vertices. In this paper, we first propose the CUR-Trans algorithm, which can reduce the time complexity for computing PageRank values and has lower error bound than existing matrix approximation-based PageRank algorithms. Then, we develop the T2-Approx algorithm to further reduce the time complexity for computing this measurement. Experiment results on three large-scale graphs show that both the CUR-Trans algorithm and the T2-Approx algorithm achieve the lowest response time for computing PageRank values with the best accuracy (for the CUR-Trans algorithm) or the competitive accuracy (for the T2-Approx algorithm). Besides, the two proposed algorithms are able to provide estimated PageRank values for all the vertices.</p><div style="${ssrRenderStyle({ "display": "flex", "position": "relative" })}" class="gimgs" data-v-1a58729b><div class="image-container" data-text="Click to view" data-v-1a58729b>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: `/academicpage/image/project1_1.png`,
        fit: "cover",
        alt: "",
        class: "gimg1",
        "preview-src-list": ["/academicpage/image/project1_1.png"]
      }, null, _parent));
      _push(`</div><div class="image-container" data-text="Click to view" data-v-1a58729b>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: `/academicpage/image/project1_2.png`,
        fit: "cover",
        alt: "",
        class: "gimg2",
        "preview-src-list": ["/academicpage/image/project1_2.png"]
      }, null, _parent));
      _push(`</div></div></div><div class="group2" data-v-1a58729b><p class="gtitle" data-v-1a58729b>Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs</p><p class="gintro" data-v-1a58729b>Attributed graphs are graphs, where the vertices have attributes. Such graphs encompass, e.g., social network graph, citation graphs, and knowledge graphs, which have numerous real-world applications. Keyword-based search is a prominent and user-friendly way of querying attributed graphs. One widely used approach to keyword search adopts tree-based query semantics that relies on scoring functions that aggregate distances from a root to keyword-matched vertices. However, it is non-trivial to design scoring functions that capture different users\u2019 keyword preferences. This study defines and solves the skyline KTree retrieval problem that combines keyword querying with skyline functionality on attributed graphs. The result of a skyline KTree query is independent of scoring functions. Hence, no matter which keywords are preferred, users can always find their favorite KTrees in a result. To enable efficient skyline KTree retrieval, we propose algorithm FilterRefine that first identifies candidate results and then uses them for search space pruning. Computing distances between keywords and vertices is expensive and dominates the computational cost of FilterRefine. Inspired by subspace skyline query techniques, we convert the skyline KTree retrieval problem into a multi-dimensional subspace skyline problem and propose algorithm MultiDiSkylineOpt. This algorithm is able to reuse skylines in subspaces and uses bounds on all dimensions to accelerate distance computation. Experimental results on real datasets show that a baseline algorithm cannot report results within a 500 second cut-off time, while the proposed algorithms are able to compute results in reasonable time. In particular, MultiDiSkylineOpt is able to efficiently retrieve skyline KTrees on large graphs with millions of nodes and hundreds of millions of edges.</p><div style="${ssrRenderStyle({ "display": "flex" })}" class="gimgs" data-v-1a58729b><div class="image-container" data-text="Click to view" data-v-1a58729b>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: `/academicpage/image/project2_1.png`,
        fit: "cover",
        alt: "",
        class: "gimg1",
        "preview-src-list": ["/academicpage/image/project2_1.png"]
      }, null, _parent));
      _push(`</div><div class="image-container" data-text="Click to view" data-v-1a58729b>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: `/academicpage/image/project2_2.png`,
        fit: "cover",
        alt: "",
        class: "gimg2",
        "preview-src-list": ["/academicpage/image/project2_2.png"]
      }, null, _parent));
      _push(`</div></div></div></div><div class="achievement" data-v-1a58729b><img${ssrRenderAttr("src", _imports_4)} alt="" class="aellipse" data-v-1a58729b><p class="atitle" data-v-1a58729b>Achievements</p><div class="aline1" data-v-1a58729b></div><div class="aline2" data-v-1a58729b></div><div class="achievements" data-v-1a58729b>`);
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
                  _push3(`<div class="abuttons" data-v-1a58729b${_scopeId2}><button class="${ssrRenderClass([{ "selecttab": activetab.value === 1 }, "abutton"])}" data-v-1a58729b${_scopeId2}>Research Awards</button><button class="${ssrRenderClass([{ "selecttab": activetab.value === 2 }, "abutton"])}" data-v-1a58729b${_scopeId2}>Research Grants</button><button class="${ssrRenderClass([{ "selecttab": activetab.value === 3 }, "abutton"])}" data-v-1a58729b${_scopeId2}>Research Publications</button><button class="${ssrRenderClass([{ "selecttab": activetab.value === 4 }, "abutton"])}" data-v-1a58729b${_scopeId2}>Patents</button></div><div class="dblp" data-v-1a58729b${_scopeId2}><a href="https://dblp.org/pid/81/6181.html" target="_blank" style="${ssrRenderStyle({ "color": "#2F81FC" })}" data-v-1a58729b${_scopeId2}>[DBLP]</a>\xA0 <a href="https://scholar.google.com/citations?user=oRbQlsEAAAAJ&amp;hl=en" target="_blank" style="${ssrRenderStyle({ "color": "#2F81FC" })}" data-v-1a58729b${_scopeId2}>[Google Scholar]</a></div>`);
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
                      }, "Patents", 10, ["onClick"])
                    ]),
                    createVNode("div", { class: "dblp" }, [
                      createVNode("a", {
                        href: "https://dblp.org/pid/81/6181.html",
                        target: "_blank",
                        style: { "color": "#2F81FC" }
                      }, "[DBLP]"),
                      createTextVNode("\xA0 "),
                      createVNode("a", {
                        href: "https://scholar.google.com/citations?user=oRbQlsEAAAAJ&hl=en",
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
                    _push3(`<div class="atext" data-v-1a58729b${_scopeId2}><p data-v-1a58729b${_scopeId2}>2023\u5E74\u5E7F\u4E1C\u7701\u8BA1\u7B97\u673A\u5B66\u4F1A\u4F18\u79C0\u8BBA\u6587\u4E8C\u7B49\u5956\uFF0CDensity-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)</p><p data-v-1a58729b${_scopeId2}>2021\u5E74\u5E7F\u4E1C\u7701\u8BA1\u7B97\u673A\u5B66\u4F1A\u4F18\u79C0\u8BBA\u6587\u4E8C\u7B49\u5956\uFF0CDensity-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (activetab.value === 2) {
                    _push3(`<div class="atext" data-v-1a58729b${_scopeId2}><p data-v-1a58729b${_scopeId2}>\u9879\u76EE\u540D\u79F0\uFF1A\u9762\u5411\u8D85\u5927\u56FE\u6570\u636E\u5206\u6790\u7684\u591A\u6837\u672C\u5206\u5E03\u5F0F\u8BA1\u7B97\u65B9\u6CD5\u4E0E\u7B97\u6CD5\u7814\u7A76\uFF0C\u7ECF\u8D39\u6765\u6E90\uFF1A\u56FD\u5BB6\u81EA\u7136\u79D1\u5B66\u57FA\u91D1\u9762\u4E0A\u9879\u76EE\uFF0C\u8D77\u6B62\u65F6\u95F4\uFF1A2024-01\u81F32027-12\u3002</p><p data-v-1a58729b${_scopeId2}>\u9879\u76EE\u540D\u79F0\uFF1A\u4F4D\u7F6E\u76F8\u5173\u7684\u7F51\u7EDC\u4FE1\u606F\u6570\u636E\u67E5\u8BE2\u63A8\u8350\u6A21\u578B\u4E0E\u7B97\u6CD5\u7814\u7A76\uFF0C\u7ECF\u8D39\u6765\u6E90\uFF1A\u56FD\u5BB6\u81EA\u7136\u79D1\u5B66\u57FA\u91D1\u9752\u5E74\u9879\u76EE\uFF0C\u8D77\u6B62\u65F6\u95F4\uFF1A2016-01\u81F32018-12\u3002</p><p data-v-1a58729b${_scopeId2}>\u9879\u76EE\u540D\u79F0\uFF1A\u591A\u63A8\u7406\u6A21\u5F0F\u3001\u591A\u5C5E\u6027\u7684\u56FE\u5D4C\u5165\u8868\u793A\u5B66\u4E60\u5173\u952E\u6280\u672F\u7814\u7A76\uFF0C\u7ECF\u8D39\u6765\u6E90\uFF1A\u5E7F\u4E1C\u7701\u57FA\u7840\u4E0E\u5E94\u7528\u57FA\u7840\u7814\u7A76\u57FA\u91D1\u9762\u4E0A\u9879\u76EE\uFF0C\u8D77\u6B62\u65F6\u95F4\uFF1A2023-01\u81F32025-12\u3002</p><p data-v-1a58729b${_scopeId2}>\u9879\u76EE\u540D\u79F0\uFF1A\u65F6\u7A7ARDF\u6570\u636E\u4E0A\u7684\u8BED\u4E49\u5730\u70B9\u68C0\u7D22\u6280\u672F\u7814\u7A76\uFF0C\u7ECF\u8D39\u6765\u6E90\uFF1A\u5E7F\u4E1C\u7701\u57FA\u7840\u4E0E\u5E94\u7528\u57FA\u7840\u7814\u7A76\u57FA\u91D1\u9762\u4E0A\u9879\u76EE\uFF0C\u8D77\u6B62\u65F6\u95F4\uFF1A2019-10\u81F32022-09\u3002</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (activetab.value === 3) {
                    _push3(`<div class="atext" data-v-1a58729b${_scopeId2}><p data-v-1a58729b${_scopeId2}>Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu: Efficient and Accurate PageRank Approximation on Large Graphs. Proc. ACM Manag. Data 2(4): 196:1-196:26 (2024)</p><p data-v-1a58729b${_scopeId2}>Dingming Wu, Zhaofen Zhang, Christian S. Jensen, Kezhong Lu: Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs. IEEE Trans. Knowl. Data Eng. 36(11): 6056-6070 (2024)</p><p data-v-1a58729b${_scopeId2}>Dingming Wu, Erjia Xiao, Yi Zhu, Christian S. Jensen, Kezhong Lu: Efficient Retrieval of the Top-k Most Relevant Event-Partner Pairs. IEEE Trans. Knowl. Data Eng. 35(3): 2529-2543 (2023)</p><p data-v-1a58729b${_scopeId2}>Dingming Wu, Ilkcan Keles, Song Wu, Hao Zhou, Simonas Saltenis, Christian S. Jensen, Kezhong Lu: Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)</p><p data-v-1a58729b${_scopeId2}>Dingming Wu, Hao Zhou, Jieming Shi, Nikos Mamoulis: Top-k relevant semantic place retrieval on spatiotemporal RDF data. VLDB J. 29(4): 893-917 (2020)</p><p data-v-1a58729b${_scopeId2}>Dingming Wu, Jieming Shi, Nikos Mamoulis: Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (activetab.value === 4) {
                    _push3(`<div class="atext" data-v-1a58729b${_scopeId2}><p data-v-1a58729b${_scopeId2}>\u53D1\u660E\u540D\u79F0\uFF1A\u57FA\u4E8E\u6DF1\u5EA6\u5B66\u4E60\u7684\u591A\u6A21\u578B\u63A8\u8FDB\u5F0F\u914D\u7535\u7F51\u6545\u969C\u8BC6\u522B\u65B9\u6CD5\u53CA\u7CFB\u7EDF\uFF0C\u53D1\u660E\u4EBA\uFF1A\u9AD8\u7FD4\uFF1B\u9EC4\u7ECF\u7814\uFF1B\u90B1\u6CFD\u9E4F\uFF1B\u674E\u8DC3\u82B9\uFF1B\u8C2D\u6B66\u6C49\uFF1B\u90ED\u94EE\u5B87\uFF1B\u5434\u5B9A\u660E\uFF0C\u4E13\u5229\u53F7\uFF1AZL 202410055975.8\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2024.06.11</p><p data-v-1a58729b${_scopeId2}>\u53D1\u660E\u540D\u79F0\uFF1A\u4E00\u79CD\u9891\u7E41\u5B50\u56FE\u6316\u6398\u65B9\u6CD5\u548C\u7EC8\u7AEF\u8BBE\u5907\uFF0C\u53D1\u660E\u4EBA\uFF1A\u5F20\u948A\u594B\uFF1B\u5434\u5B9A\u660E\uFF1B\u5434\u4EBF\u6B23\uFF1B\u9646\u514B\u4E2D\uFF1B\u9EC4\u54F2\u5B66\uFF0C\u4E13\u5229\u53F7\uFF1AZL 202310430972.3\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2023.11.28</p><p data-v-1a58729b${_scopeId2}>\u53D1\u660E\u540D\u79F0\uFF1A\u77E5\u8BC6\u56FE\u8C31\u5D4C\u5165\u6A21\u578B\u8BAD\u7EC3\u65B9\u6CD5\u3001\u88C5\u7F6E\u3001\u7535\u5B50\u8BBE\u5907\u53CA\u4ECB\u8D28\uFF0C\u53D1\u660E\u4EBA\uFF1A\u5434\u5B9A\u660E\uFF1B\u5468\u94B0\u68CB\uFF1B\u9646\u514B\u4E2D\uFF1B\u8A79\u91D1\u9896\uFF0C\u4E13\u5229\u53F7\uFF1AZL 202111472336.4\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2022.05.20</p><p data-v-1a58729b${_scopeId2}>\u53D1\u660E\u540D\u79F0\uFF1ARDF\u6570\u636E\u4E2D\u5929\u9645\u7EBF\u4F4D\u7F6E\u8282\u70B9\u67E5\u8BE2\u65B9\u6CD5\u3001\u88C5\u7F6E\u548C\u8BBE\u5907\uFF0C\u53D1\u660E\u4EBA\uFF1A\u5434\u5B9A\u660E\uFF1B\u5F20\u948A\u594B\uFF1B\u9646\u514B\u4E2D\uFF0C\u4E13\u5229\u53F7\uFF1AZL 202210026117.1\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2022.05.17</p><p data-v-1a58729b${_scopeId2}>\u53D1\u660E\u540D\u79F0\uFF1A\u4E00\u79CD\u6D3B\u52A8\u4E0E\u540C\u4F34\u7684\u68C0\u7D22\u65B9\u6CD5\u53CA\u7CFB\u7EDF\uFF0C\u53D1\u660E\u4EBA\uFF1A\u5434\u5B9A\u660E\uFF1B\u6731\u827A\uFF1B\u9EC4\u54F2\u5B66\uFF0C\u4E13\u5229\u53F7\uFF1AZL 201810294059.4\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2021.08.06</p><p data-v-1a58729b${_scopeId2}>\u53D1\u660E\u540D\u79F0\uFF1A\u57FA\u4E8E\u5206\u7C7B\u6811\u7684\u6700\u5927\u591A\u6837\u9891\u7E41\u6A21\u5F0F\u7684\u6316\u6398\u65B9\u6CD5\u53CA\u88C5\u7F6E\uFF0C\u53D1\u660E\u4EBA\uFF1A\u5434\u5B9A\u660E\uFF1B\u7F57\u5FB7\u65B0\uFF1B\u9EC4\u54F2\u5B66\uFF0C\u4E13\u5229\u53F7\uFF1AZL 201710821358.4\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2020.12.04</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    activetab.value === 1 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "atext"
                    }, [
                      createVNode("p", null, "2023\u5E74\u5E7F\u4E1C\u7701\u8BA1\u7B97\u673A\u5B66\u4F1A\u4F18\u79C0\u8BBA\u6587\u4E8C\u7B49\u5956\uFF0CDensity-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)"),
                      createVNode("p", null, "2021\u5E74\u5E7F\u4E1C\u7701\u8BA1\u7B97\u673A\u5B66\u4F1A\u4F18\u79C0\u8BBA\u6587\u4E8C\u7B49\u5956\uFF0CDensity-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)")
                    ])) : createCommentVNode("", true),
                    activetab.value === 2 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "atext"
                    }, [
                      createVNode("p", null, "\u9879\u76EE\u540D\u79F0\uFF1A\u9762\u5411\u8D85\u5927\u56FE\u6570\u636E\u5206\u6790\u7684\u591A\u6837\u672C\u5206\u5E03\u5F0F\u8BA1\u7B97\u65B9\u6CD5\u4E0E\u7B97\u6CD5\u7814\u7A76\uFF0C\u7ECF\u8D39\u6765\u6E90\uFF1A\u56FD\u5BB6\u81EA\u7136\u79D1\u5B66\u57FA\u91D1\u9762\u4E0A\u9879\u76EE\uFF0C\u8D77\u6B62\u65F6\u95F4\uFF1A2024-01\u81F32027-12\u3002"),
                      createVNode("p", null, "\u9879\u76EE\u540D\u79F0\uFF1A\u4F4D\u7F6E\u76F8\u5173\u7684\u7F51\u7EDC\u4FE1\u606F\u6570\u636E\u67E5\u8BE2\u63A8\u8350\u6A21\u578B\u4E0E\u7B97\u6CD5\u7814\u7A76\uFF0C\u7ECF\u8D39\u6765\u6E90\uFF1A\u56FD\u5BB6\u81EA\u7136\u79D1\u5B66\u57FA\u91D1\u9752\u5E74\u9879\u76EE\uFF0C\u8D77\u6B62\u65F6\u95F4\uFF1A2016-01\u81F32018-12\u3002"),
                      createVNode("p", null, "\u9879\u76EE\u540D\u79F0\uFF1A\u591A\u63A8\u7406\u6A21\u5F0F\u3001\u591A\u5C5E\u6027\u7684\u56FE\u5D4C\u5165\u8868\u793A\u5B66\u4E60\u5173\u952E\u6280\u672F\u7814\u7A76\uFF0C\u7ECF\u8D39\u6765\u6E90\uFF1A\u5E7F\u4E1C\u7701\u57FA\u7840\u4E0E\u5E94\u7528\u57FA\u7840\u7814\u7A76\u57FA\u91D1\u9762\u4E0A\u9879\u76EE\uFF0C\u8D77\u6B62\u65F6\u95F4\uFF1A2023-01\u81F32025-12\u3002"),
                      createVNode("p", null, "\u9879\u76EE\u540D\u79F0\uFF1A\u65F6\u7A7ARDF\u6570\u636E\u4E0A\u7684\u8BED\u4E49\u5730\u70B9\u68C0\u7D22\u6280\u672F\u7814\u7A76\uFF0C\u7ECF\u8D39\u6765\u6E90\uFF1A\u5E7F\u4E1C\u7701\u57FA\u7840\u4E0E\u5E94\u7528\u57FA\u7840\u7814\u7A76\u57FA\u91D1\u9762\u4E0A\u9879\u76EE\uFF0C\u8D77\u6B62\u65F6\u95F4\uFF1A2019-10\u81F32022-09\u3002")
                    ])) : createCommentVNode("", true),
                    activetab.value === 3 ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "atext"
                    }, [
                      createVNode("p", null, "Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu: Efficient and Accurate PageRank Approximation on Large Graphs. Proc. ACM Manag. Data 2(4): 196:1-196:26 (2024)"),
                      createVNode("p", null, "Dingming Wu, Zhaofen Zhang, Christian S. Jensen, Kezhong Lu: Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs. IEEE Trans. Knowl. Data Eng. 36(11): 6056-6070 (2024)"),
                      createVNode("p", null, "Dingming Wu, Erjia Xiao, Yi Zhu, Christian S. Jensen, Kezhong Lu: Efficient Retrieval of the Top-k Most Relevant Event-Partner Pairs. IEEE Trans. Knowl. Data Eng. 35(3): 2529-2543 (2023)"),
                      createVNode("p", null, "Dingming Wu, Ilkcan Keles, Song Wu, Hao Zhou, Simonas Saltenis, Christian S. Jensen, Kezhong Lu: Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)"),
                      createVNode("p", null, "Dingming Wu, Hao Zhou, Jieming Shi, Nikos Mamoulis: Top-k relevant semantic place retrieval on spatiotemporal RDF data. VLDB J. 29(4): 893-917 (2020)"),
                      createVNode("p", null, "Dingming Wu, Jieming Shi, Nikos Mamoulis: Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)")
                    ])) : createCommentVNode("", true),
                    activetab.value === 4 ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "atext"
                    }, [
                      createVNode("p", null, "\u53D1\u660E\u540D\u79F0\uFF1A\u57FA\u4E8E\u6DF1\u5EA6\u5B66\u4E60\u7684\u591A\u6A21\u578B\u63A8\u8FDB\u5F0F\u914D\u7535\u7F51\u6545\u969C\u8BC6\u522B\u65B9\u6CD5\u53CA\u7CFB\u7EDF\uFF0C\u53D1\u660E\u4EBA\uFF1A\u9AD8\u7FD4\uFF1B\u9EC4\u7ECF\u7814\uFF1B\u90B1\u6CFD\u9E4F\uFF1B\u674E\u8DC3\u82B9\uFF1B\u8C2D\u6B66\u6C49\uFF1B\u90ED\u94EE\u5B87\uFF1B\u5434\u5B9A\u660E\uFF0C\u4E13\u5229\u53F7\uFF1AZL 202410055975.8\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2024.06.11"),
                      createVNode("p", null, "\u53D1\u660E\u540D\u79F0\uFF1A\u4E00\u79CD\u9891\u7E41\u5B50\u56FE\u6316\u6398\u65B9\u6CD5\u548C\u7EC8\u7AEF\u8BBE\u5907\uFF0C\u53D1\u660E\u4EBA\uFF1A\u5F20\u948A\u594B\uFF1B\u5434\u5B9A\u660E\uFF1B\u5434\u4EBF\u6B23\uFF1B\u9646\u514B\u4E2D\uFF1B\u9EC4\u54F2\u5B66\uFF0C\u4E13\u5229\u53F7\uFF1AZL 202310430972.3\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2023.11.28"),
                      createVNode("p", null, "\u53D1\u660E\u540D\u79F0\uFF1A\u77E5\u8BC6\u56FE\u8C31\u5D4C\u5165\u6A21\u578B\u8BAD\u7EC3\u65B9\u6CD5\u3001\u88C5\u7F6E\u3001\u7535\u5B50\u8BBE\u5907\u53CA\u4ECB\u8D28\uFF0C\u53D1\u660E\u4EBA\uFF1A\u5434\u5B9A\u660E\uFF1B\u5468\u94B0\u68CB\uFF1B\u9646\u514B\u4E2D\uFF1B\u8A79\u91D1\u9896\uFF0C\u4E13\u5229\u53F7\uFF1AZL 202111472336.4\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2022.05.20"),
                      createVNode("p", null, "\u53D1\u660E\u540D\u79F0\uFF1ARDF\u6570\u636E\u4E2D\u5929\u9645\u7EBF\u4F4D\u7F6E\u8282\u70B9\u67E5\u8BE2\u65B9\u6CD5\u3001\u88C5\u7F6E\u548C\u8BBE\u5907\uFF0C\u53D1\u660E\u4EBA\uFF1A\u5434\u5B9A\u660E\uFF1B\u5F20\u948A\u594B\uFF1B\u9646\u514B\u4E2D\uFF0C\u4E13\u5229\u53F7\uFF1AZL 202210026117.1\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2022.05.17"),
                      createVNode("p", null, "\u53D1\u660E\u540D\u79F0\uFF1A\u4E00\u79CD\u6D3B\u52A8\u4E0E\u540C\u4F34\u7684\u68C0\u7D22\u65B9\u6CD5\u53CA\u7CFB\u7EDF\uFF0C\u53D1\u660E\u4EBA\uFF1A\u5434\u5B9A\u660E\uFF1B\u6731\u827A\uFF1B\u9EC4\u54F2\u5B66\uFF0C\u4E13\u5229\u53F7\uFF1AZL 201810294059.4\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2021.08.06"),
                      createVNode("p", null, "\u53D1\u660E\u540D\u79F0\uFF1A\u57FA\u4E8E\u5206\u7C7B\u6811\u7684\u6700\u5927\u591A\u6837\u9891\u7E41\u6A21\u5F0F\u7684\u6316\u6398\u65B9\u6CD5\u53CA\u88C5\u7F6E\uFF0C\u53D1\u660E\u4EBA\uFF1A\u5434\u5B9A\u660E\uFF1B\u7F57\u5FB7\u65B0\uFF1B\u9EC4\u54F2\u5B66\uFF0C\u4E13\u5229\u53F7\uFF1AZL 201710821358.4\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2020.12.04")
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
                    }, "Patents", 10, ["onClick"])
                  ]),
                  createVNode("div", { class: "dblp" }, [
                    createVNode("a", {
                      href: "https://dblp.org/pid/81/6181.html",
                      target: "_blank",
                      style: { "color": "#2F81FC" }
                    }, "[DBLP]"),
                    createTextVNode("\xA0 "),
                    createVNode("a", {
                      href: "https://scholar.google.com/citations?user=oRbQlsEAAAAJ&hl=en",
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
                    createVNode("p", null, "2023\u5E74\u5E7F\u4E1C\u7701\u8BA1\u7B97\u673A\u5B66\u4F1A\u4F18\u79C0\u8BBA\u6587\u4E8C\u7B49\u5956\uFF0CDensity-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)"),
                    createVNode("p", null, "2021\u5E74\u5E7F\u4E1C\u7701\u8BA1\u7B97\u673A\u5B66\u4F1A\u4F18\u79C0\u8BBA\u6587\u4E8C\u7B49\u5956\uFF0CDensity-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)")
                  ])) : createCommentVNode("", true),
                  activetab.value === 2 ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "atext"
                  }, [
                    createVNode("p", null, "\u9879\u76EE\u540D\u79F0\uFF1A\u9762\u5411\u8D85\u5927\u56FE\u6570\u636E\u5206\u6790\u7684\u591A\u6837\u672C\u5206\u5E03\u5F0F\u8BA1\u7B97\u65B9\u6CD5\u4E0E\u7B97\u6CD5\u7814\u7A76\uFF0C\u7ECF\u8D39\u6765\u6E90\uFF1A\u56FD\u5BB6\u81EA\u7136\u79D1\u5B66\u57FA\u91D1\u9762\u4E0A\u9879\u76EE\uFF0C\u8D77\u6B62\u65F6\u95F4\uFF1A2024-01\u81F32027-12\u3002"),
                    createVNode("p", null, "\u9879\u76EE\u540D\u79F0\uFF1A\u4F4D\u7F6E\u76F8\u5173\u7684\u7F51\u7EDC\u4FE1\u606F\u6570\u636E\u67E5\u8BE2\u63A8\u8350\u6A21\u578B\u4E0E\u7B97\u6CD5\u7814\u7A76\uFF0C\u7ECF\u8D39\u6765\u6E90\uFF1A\u56FD\u5BB6\u81EA\u7136\u79D1\u5B66\u57FA\u91D1\u9752\u5E74\u9879\u76EE\uFF0C\u8D77\u6B62\u65F6\u95F4\uFF1A2016-01\u81F32018-12\u3002"),
                    createVNode("p", null, "\u9879\u76EE\u540D\u79F0\uFF1A\u591A\u63A8\u7406\u6A21\u5F0F\u3001\u591A\u5C5E\u6027\u7684\u56FE\u5D4C\u5165\u8868\u793A\u5B66\u4E60\u5173\u952E\u6280\u672F\u7814\u7A76\uFF0C\u7ECF\u8D39\u6765\u6E90\uFF1A\u5E7F\u4E1C\u7701\u57FA\u7840\u4E0E\u5E94\u7528\u57FA\u7840\u7814\u7A76\u57FA\u91D1\u9762\u4E0A\u9879\u76EE\uFF0C\u8D77\u6B62\u65F6\u95F4\uFF1A2023-01\u81F32025-12\u3002"),
                    createVNode("p", null, "\u9879\u76EE\u540D\u79F0\uFF1A\u65F6\u7A7ARDF\u6570\u636E\u4E0A\u7684\u8BED\u4E49\u5730\u70B9\u68C0\u7D22\u6280\u672F\u7814\u7A76\uFF0C\u7ECF\u8D39\u6765\u6E90\uFF1A\u5E7F\u4E1C\u7701\u57FA\u7840\u4E0E\u5E94\u7528\u57FA\u7840\u7814\u7A76\u57FA\u91D1\u9762\u4E0A\u9879\u76EE\uFF0C\u8D77\u6B62\u65F6\u95F4\uFF1A2019-10\u81F32022-09\u3002")
                  ])) : createCommentVNode("", true),
                  activetab.value === 3 ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "atext"
                  }, [
                    createVNode("p", null, "Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu: Efficient and Accurate PageRank Approximation on Large Graphs. Proc. ACM Manag. Data 2(4): 196:1-196:26 (2024)"),
                    createVNode("p", null, "Dingming Wu, Zhaofen Zhang, Christian S. Jensen, Kezhong Lu: Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs. IEEE Trans. Knowl. Data Eng. 36(11): 6056-6070 (2024)"),
                    createVNode("p", null, "Dingming Wu, Erjia Xiao, Yi Zhu, Christian S. Jensen, Kezhong Lu: Efficient Retrieval of the Top-k Most Relevant Event-Partner Pairs. IEEE Trans. Knowl. Data Eng. 35(3): 2529-2543 (2023)"),
                    createVNode("p", null, "Dingming Wu, Ilkcan Keles, Song Wu, Hao Zhou, Simonas Saltenis, Christian S. Jensen, Kezhong Lu: Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)"),
                    createVNode("p", null, "Dingming Wu, Hao Zhou, Jieming Shi, Nikos Mamoulis: Top-k relevant semantic place retrieval on spatiotemporal RDF data. VLDB J. 29(4): 893-917 (2020)"),
                    createVNode("p", null, "Dingming Wu, Jieming Shi, Nikos Mamoulis: Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)")
                  ])) : createCommentVNode("", true),
                  activetab.value === 4 ? (openBlock(), createBlock("div", {
                    key: 3,
                    class: "atext"
                  }, [
                    createVNode("p", null, "\u53D1\u660E\u540D\u79F0\uFF1A\u57FA\u4E8E\u6DF1\u5EA6\u5B66\u4E60\u7684\u591A\u6A21\u578B\u63A8\u8FDB\u5F0F\u914D\u7535\u7F51\u6545\u969C\u8BC6\u522B\u65B9\u6CD5\u53CA\u7CFB\u7EDF\uFF0C\u53D1\u660E\u4EBA\uFF1A\u9AD8\u7FD4\uFF1B\u9EC4\u7ECF\u7814\uFF1B\u90B1\u6CFD\u9E4F\uFF1B\u674E\u8DC3\u82B9\uFF1B\u8C2D\u6B66\u6C49\uFF1B\u90ED\u94EE\u5B87\uFF1B\u5434\u5B9A\u660E\uFF0C\u4E13\u5229\u53F7\uFF1AZL 202410055975.8\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2024.06.11"),
                    createVNode("p", null, "\u53D1\u660E\u540D\u79F0\uFF1A\u4E00\u79CD\u9891\u7E41\u5B50\u56FE\u6316\u6398\u65B9\u6CD5\u548C\u7EC8\u7AEF\u8BBE\u5907\uFF0C\u53D1\u660E\u4EBA\uFF1A\u5F20\u948A\u594B\uFF1B\u5434\u5B9A\u660E\uFF1B\u5434\u4EBF\u6B23\uFF1B\u9646\u514B\u4E2D\uFF1B\u9EC4\u54F2\u5B66\uFF0C\u4E13\u5229\u53F7\uFF1AZL 202310430972.3\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2023.11.28"),
                    createVNode("p", null, "\u53D1\u660E\u540D\u79F0\uFF1A\u77E5\u8BC6\u56FE\u8C31\u5D4C\u5165\u6A21\u578B\u8BAD\u7EC3\u65B9\u6CD5\u3001\u88C5\u7F6E\u3001\u7535\u5B50\u8BBE\u5907\u53CA\u4ECB\u8D28\uFF0C\u53D1\u660E\u4EBA\uFF1A\u5434\u5B9A\u660E\uFF1B\u5468\u94B0\u68CB\uFF1B\u9646\u514B\u4E2D\uFF1B\u8A79\u91D1\u9896\uFF0C\u4E13\u5229\u53F7\uFF1AZL 202111472336.4\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2022.05.20"),
                    createVNode("p", null, "\u53D1\u660E\u540D\u79F0\uFF1ARDF\u6570\u636E\u4E2D\u5929\u9645\u7EBF\u4F4D\u7F6E\u8282\u70B9\u67E5\u8BE2\u65B9\u6CD5\u3001\u88C5\u7F6E\u548C\u8BBE\u5907\uFF0C\u53D1\u660E\u4EBA\uFF1A\u5434\u5B9A\u660E\uFF1B\u5F20\u948A\u594B\uFF1B\u9646\u514B\u4E2D\uFF0C\u4E13\u5229\u53F7\uFF1AZL 202210026117.1\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2022.05.17"),
                    createVNode("p", null, "\u53D1\u660E\u540D\u79F0\uFF1A\u4E00\u79CD\u6D3B\u52A8\u4E0E\u540C\u4F34\u7684\u68C0\u7D22\u65B9\u6CD5\u53CA\u7CFB\u7EDF\uFF0C\u53D1\u660E\u4EBA\uFF1A\u5434\u5B9A\u660E\uFF1B\u6731\u827A\uFF1B\u9EC4\u54F2\u5B66\uFF0C\u4E13\u5229\u53F7\uFF1AZL 201810294059.4\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2021.08.06"),
                    createVNode("p", null, "\u53D1\u660E\u540D\u79F0\uFF1A\u57FA\u4E8E\u5206\u7C7B\u6811\u7684\u6700\u5927\u591A\u6837\u9891\u7E41\u6A21\u5F0F\u7684\u6316\u6398\u65B9\u6CD5\u53CA\u88C5\u7F6E\uFF0C\u53D1\u660E\u4EBA\uFF1A\u5434\u5B9A\u660E\uFF1B\u7F57\u5FB7\u65B0\uFF1B\u9EC4\u54F2\u5B66\uFF0C\u4E13\u5229\u53F7\uFF1AZL 201710821358.4\uFF0C\u6388\u6743\u516C\u5E03\u65E5\uFF1A2020.12.04")
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="ps" data-v-1a58729b><div class="pstitle" data-v-1a58729b><img${ssrRenderAttr("src", _imports_5)} alt="" class="pellipse" data-v-1a58729b><p class="ptitle" data-v-1a58729b>Professional Services</p><div class="pline1" data-v-1a58729b></div><div class="pline2" data-v-1a58729b></div></div><table style="${ssrRenderStyle({ "border-collapse": "separate", "border-spacing": "0px 24px" })}" data-v-1a58729b><tbody data-v-1a58729b><tr data-v-1a58729b><td class="tdtitle" data-v-1a58729b>Journal Referee</td><td class="tdtext" data-v-1a58729b><p data-v-1a58729b>The International Journal on Very Large Data Bases (VLDBJ)</p><p data-v-1a58729b>IEEE Transactions on Knowledge and Data Engineering (TKDE)</p></td></tr><tr data-v-1a58729b><td class="tdtitle" data-v-1a58729b>Conference Program Committee/Reviewer</td><td class="tdtext" data-v-1a58729b><p data-v-1a58729b>Special Interest Group on Knowledge Discovery and Data Mining (SIGKDD) 2025, 2024</p><p data-v-1a58729b>IEEE International Conference on Data Engineering (ICDE) 2025, 2022</p><p data-v-1a58729b>AAAI Conference on Artificial Intelligence 2024, 2022</p><p data-v-1a58729b>International Joint Conference on Artificial Intelligence (IJCAI) 2021</p></td></tr></tbody><colgroup data-v-1a58729b><col data-v-1a58729b><col data-v-1a58729b></colgroup></table></div><div class="teaching" data-v-1a58729b><div class="teachingtitle" data-v-1a58729b><img${ssrRenderAttr("src", _imports_6)} alt="" class="tellipse" data-v-1a58729b><p class="ptitle" data-v-1a58729b>Teaching</p><div class="pline1" data-v-1a58729b></div><div class="pline2" data-v-1a58729b></div></div><div class="card" data-v-1a58729b><div class="course" data-v-1a58729b><p class="ctitle" data-v-1a58729b>Courses</p><div class="ctext" data-v-1a58729b><p data-v-1a58729b>Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)</p><p data-v-1a58729b>Data Structures (Fall 2024-2019)</p><p data-v-1a58729b>Big Data Processing and Analytics (Spring 2019)</p><p data-v-1a58729b>Introdution to Big Data (Fall 2018-2017)</p><p data-v-1a58729b>Information Retrieval (Spring 2018-2017)</p><p data-v-1a58729b>Search Engine Technology (Fall 2016)</p></div><button class="more1" style="${ssrRenderStyle({ "display": "flex" })}" data-v-1a58729b> MORE <img${ssrRenderAttr("src", _imports_7)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-1a58729b></button></div><div class="at" data-v-1a58729b><p class="ctitle" data-v-1a58729b>Awards</p><div class="ctext" data-v-1a58729b><p data-v-1a58729b>2024\u5E74\u7B2C\u4E5D\u5C4A\u5168\u56FD\u8BA1\u7B97\u673A\u7C7B\u8BFE\u7A0B\u5B9E\u9A8C\u6559\u5B66\u6848\u4F8B\u8BC4\u9009\u4F18\u79C0\u6848\u4F8B\uFF0C\u4E00\u7B49\u5956</p><p data-v-1a58729b>2023\u5E74\u5E7F\u4E1C\u7701\u4E00\u6D41\u672C\u79D1\u8BFE\u7A0B\uFF0C\u7B97\u6CD5\u8BBE\u8BA1\u4E0E\u5206\u6790</p><p data-v-1a58729b>2021\u5E74\u6DF1\u5733\u5927\u5B66\u6559\u80B2\u6559\u5B66\u6210\u679C(\u9AD8\u7B49\u6559\u80B2\u7C7B)\uFF0C\u4E00\u7B49\u5956\uFF0C\u4EA7\u6559\u878D\u5408\u7406\u5FF5\u4E0B\u6821\u4F01\u53CC\u4E3B\u4F53\u534F\u540C\u57F9\u517B\u8BA1\u7B97\u673A\u5DE5\u7A0B\u7855\u58EB\u7684\u521B\u65B0\u4E0E\u5B9E\u8DF5</p></div><button class="more2" style="${ssrRenderStyle({ "display": "flex" })}" data-v-1a58729b> MORE <img${ssrRenderAttr("src", _imports_7)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-1a58729b></button></div><div class="tutorials" data-v-1a58729b><p class="ctitle" data-v-1a58729b>Students</p><div class="ctext" data-v-1a58729b><h1 data-v-1a58729b>\u5728\u8BFB\u5B66\u751F</h1><p data-v-1a58729b>\u535A\u58EB\u751F\uFF1A\u4F0D\u65AF\u73A5</p><p data-v-1a58729b>\u7855\u58EB\u751F\uFF1A\u5168\u4FCA\u71A0\uFF0C\u5353\u4ED9\u9E3F\uFF0C\u9EC4\u7ECF\u7814\uFF0C\u5510\u4F1F\u79D1\uFF0C\u5218\u6D0B\uFF0C\u5434\u6D69\u948A\uFF0C\u9EC4\u723D\u6021\uFF0C\u738B\u51EF\u6D9B\uFF0C\u718A\u56FD\u4F1F\uFF0C\u674E\u53EF\u6B23\uFF0C\u9A86\u9038\u6587\uFF0C\u9EC4\u4F0A\u6866\uFF0C\u5ED6\u660E\u7533</p><br data-v-1a58729b><h1 data-v-1a58729b>\u6BD5\u4E1A\u5B66\u751F</h1><p data-v-1a58729b>\u8D56\u65B0\u9896\uFF0C\u534E\u4E3A</p><p data-v-1a58729b>\u5415\u534E\u5F6C\uFF0C\u4E5D\u7EF4\u6570\u636E\u6280\u672F\u6709\u9650\u516C\u53F8</p><p data-v-1a58729b>\u8881\u695A\u6770\uFF0C\u5B57\u8282\u8DF3\u52A8</p><p data-v-1a58729b>\u5F20\u948A\u594B\uFF0C\u6DF1\u5733\u6749\u5CA9\u6570\u636E\u6280\u672F\u6709\u9650\u516C\u53F8\uFF0C\u4F18\u79C0\u6BD5\u4E1A\u751F</p><p data-v-1a58729b>\u6731\u601D\u6F7C\uFF0C\u516C\u52A1\u5458\uFF08\u56FD\u5BB6\u7A0E\u52A1\u603B\u5C40\u5E7F\u5DDE\u5E02\u7A0E\u52A1\u5C40\uFF09</p><p data-v-1a58729b>\u674E\u5BC6\uFF0C\u62DB\u94F6\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8</p><p data-v-1a58729b>\u675C\u56FD\u826F\uFF0C\u5E7F\u5DDE\u51EF\u5A92\u901A\u8BAF\u6280\u672F\u6709\u9650\u516C\u53F8</p><p data-v-1a58729b>\u5434\u4EBF\u6B23\uFF0C\u4E2D\u56FD\u4EBA\u5BFF\u4FDD\u9669\u80A1\u4EFD\u6709\u9650\u516C\u53F8</p><p data-v-1a58729b>\u5468\u94B0\u742A\uFF0C\u516C\u52A1\u5458\uFF08\u6DF1\u5733\u5E02\u793E\u4F1A\u4FDD\u9669\u57FA\u91D1\u7BA1\u7406\u5C40\u5B9D\u5B89\u5206\u5C40\uFF09</p><p data-v-1a58729b>\u5434\u677E\uFF0C\u8BFB\u535A\uFF08Utrecht University, Netherlands\uFF09</p><p data-v-1a58729b>\u6797\u4FCA\u6770\uFF0C\u62DB\u94F6\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8</p><p data-v-1a58729b>\u9648\u840C\uFF0C\u4E0A\u6D77\u5FAE\u521B\u533B\u7597\u673A\u5668\u4EBA</p><p data-v-1a58729b>\u8A79\u91D1\u9896\uFF0C\u534E\u4E3A</p><p data-v-1a58729b>\u674E\u6615\u5BB8\uFF0C\u8BFB\u535A\uFF08\u6DF1\u5733\u5927\u5B66\uFF09</p><p data-v-1a58729b>\u4FAF\u707F\uFF0C\u5EFA\u4FE1\u91D1\u878D\u79D1\u6280\u516C\u53F8</p><p data-v-1a58729b>\u5468\u8C6A\uFF0C\u534E\u4E3A</p><p data-v-1a58729b>\u7F57\u5FB7\u65B0\uFF0C\u817E\u8BAF</p><p data-v-1a58729b>\u6731\u827A\uFF0C\u5B57\u8282\u8DF3\u52A8\uFF0C\u4F18\u79C0\u6BD5\u4E1A\u751F</p></div><button class="more3" style="${ssrRenderStyle({ "display": "flex" })}" data-v-1a58729b> MORE <img${ssrRenderAttr("src", _imports_7)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-1a58729b></button></div></div><div class="book" data-v-1a58729b><p class="booktitle" data-v-1a58729b>Books</p><div class="booktext" data-v-1a58729b><p data-v-1a58729b>\u300A\u7B97\u6CD5\u8BBE\u8BA1\u4E0E\u5206\u6790\u5B9E\u8DF5\u6848\u4F8B\u89E3\u6790\u300B\uFF0C\u6E05\u534E\u5927\u5B66\u51FA\u7248\u793E</p><p data-v-1a58729b>\u300A\u7B97\u6CD5\u8BBE\u8BA1\u4E0E\u5206\u6790\u300B\uFF0C\u6E05\u534E\u5927\u5B66\u51FA\u7248\u793E</p></div></div><div id="overlay" class="overlay" data-v-1a58729b></div>`);
      if (teachingcard.value === 1) {
        _push(`<div class="coursebig" data-v-1a58729b><p class="titlebig" data-v-1a58729b>Course</p><div class="textbig" data-v-1a58729b><p data-v-1a58729b>Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)</p><p data-v-1a58729b>Data Structures (Fall 2024-2019)</p><p data-v-1a58729b>Big Data Processing and Analytics (Spring 2019)</p><p data-v-1a58729b>Introdution to Big Data (Fall 2018-2017)</p><p data-v-1a58729b>Information Retrieval (Spring 2018-2017)</p><p data-v-1a58729b>Search Engine Technology (Fall 2016)</p></div><button class="fold" style="${ssrRenderStyle({ "display": "flex" })}" data-v-1a58729b> FOLD <img${ssrRenderAttr("src", _imports_8)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-1a58729b></button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (teachingcard.value === 2) {
        _push(`<div class="coursebig" data-v-1a58729b><p class="titlebig" data-v-1a58729b>Awards</p><div class="textbig" data-v-1a58729b><p data-v-1a58729b>2024\u5E74\u7B2C\u4E5D\u5C4A\u5168\u56FD\u8BA1\u7B97\u673A\u7C7B\u8BFE\u7A0B\u5B9E\u9A8C\u6559\u5B66\u6848\u4F8B\u8BC4\u9009\u4F18\u79C0\u6848\u4F8B\uFF0C\u4E00\u7B49\u5956</p><p data-v-1a58729b>2023\u5E74\u5E7F\u4E1C\u7701\u4E00\u6D41\u672C\u79D1\u8BFE\u7A0B\uFF0C\u7B97\u6CD5\u8BBE\u8BA1\u4E0E\u5206\u6790</p><p data-v-1a58729b>2021\u5E74\u6DF1\u5733\u5927\u5B66\u6559\u80B2\u6559\u5B66\u6210\u679C(\u9AD8\u7B49\u6559\u80B2\u7C7B)\uFF0C\u4E00\u7B49\u5956\uFF0C\u4EA7\u6559\u878D\u5408\u7406\u5FF5\u4E0B\u6821\u4F01\u53CC\u4E3B\u4F53\u534F\u540C\u57F9\u517B\u8BA1\u7B97\u673A\u5DE5\u7A0B\u7855\u58EB\u7684\u521B\u65B0\u4E0E\u5B9E\u8DF5</p></div><button class="fold" style="${ssrRenderStyle({ "display": "flex" })}" data-v-1a58729b> FOLD <img${ssrRenderAttr("src", _imports_8)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-1a58729b></button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (teachingcard.value === 3) {
        _push(`<div class="coursebig" data-v-1a58729b><p class="titlebig" data-v-1a58729b>Students</p><div class="textbig" data-v-1a58729b><h1 data-v-1a58729b>\u5728\u8BFB\u5B66\u751F</h1><p data-v-1a58729b>\u535A\u58EB\u751F\uFF1A\u4F0D\u65AF\u73A5</p><p data-v-1a58729b>\u7855\u58EB\u751F\uFF1A\u5168\u4FCA\u71A0\uFF0C\u5353\u4ED9\u9E3F\uFF0C\u9EC4\u7ECF\u7814\uFF0C\u5510\u4F1F\u79D1\uFF0C\u5218\u6D0B\uFF0C\u5434\u6D69\u948A\uFF0C\u9EC4\u723D\u6021\uFF0C\u738B\u51EF\u6D9B\uFF0C\u718A\u56FD\u4F1F\uFF0C\u674E\u53EF\u6B23\uFF0C\u9A86\u9038\u6587\uFF0C\u9EC4\u4F0A\u6866\uFF0C\u5ED6\u660E\u7533</p><br data-v-1a58729b><h1 data-v-1a58729b>\u6BD5\u4E1A\u5B66\u751F</h1><p data-v-1a58729b>\u8D56\u65B0\u9896\uFF0C\u534E\u4E3A</p><p data-v-1a58729b>\u5415\u534E\u5F6C\uFF0C\u4E5D\u7EF4\u6570\u636E\u6280\u672F\u6709\u9650\u516C\u53F8</p><p data-v-1a58729b>\u8881\u695A\u6770\uFF0C\u5B57\u8282\u8DF3\u52A8</p><p data-v-1a58729b>\u5F20\u948A\u594B\uFF0C\u6DF1\u5733\u6749\u5CA9\u6570\u636E\u6280\u672F\u6709\u9650\u516C\u53F8\uFF0C\u4F18\u79C0\u6BD5\u4E1A\u751F</p><p data-v-1a58729b>\u6731\u601D\u6F7C\uFF0C\u516C\u52A1\u5458\uFF08\u56FD\u5BB6\u7A0E\u52A1\u603B\u5C40\u5E7F\u5DDE\u5E02\u7A0E\u52A1\u5C40\uFF09</p><p data-v-1a58729b>\u674E\u5BC6\uFF0C\u62DB\u94F6\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8</p><p data-v-1a58729b>\u675C\u56FD\u826F\uFF0C\u5E7F\u5DDE\u51EF\u5A92\u901A\u8BAF\u6280\u672F\u6709\u9650\u516C\u53F8</p><p data-v-1a58729b>\u5434\u4EBF\u6B23\uFF0C\u4E2D\u56FD\u4EBA\u5BFF\u4FDD\u9669\u80A1\u4EFD\u6709\u9650\u516C\u53F8</p><p data-v-1a58729b>\u5468\u94B0\u742A\uFF0C\u516C\u52A1\u5458\uFF08\u6DF1\u5733\u5E02\u793E\u4F1A\u4FDD\u9669\u57FA\u91D1\u7BA1\u7406\u5C40\u5B9D\u5B89\u5206\u5C40\uFF09</p><p data-v-1a58729b>\u5434\u677E\uFF0C\u8BFB\u535A\uFF08Utrecht University, Netherlands\uFF09</p><p data-v-1a58729b>\u6797\u4FCA\u6770\uFF0C\u62DB\u94F6\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8</p><p data-v-1a58729b>\u9648\u840C\uFF0C\u4E0A\u6D77\u5FAE\u521B\u533B\u7597\u673A\u5668\u4EBA</p><p data-v-1a58729b>\u8A79\u91D1\u9896\uFF0C\u534E\u4E3A</p><p data-v-1a58729b>\u674E\u6615\u5BB8\uFF0C\u8BFB\u535A\uFF08\u6DF1\u5733\u5927\u5B66\uFF09</p><p data-v-1a58729b>\u4FAF\u707F\uFF0C\u5EFA\u4FE1\u91D1\u878D\u79D1\u6280\u516C\u53F8</p><p data-v-1a58729b>\u5468\u8C6A\uFF0C\u534E\u4E3A</p><p data-v-1a58729b>\u7F57\u5FB7\u65B0\uFF0C\u817E\u8BAF</p><p data-v-1a58729b>\u6731\u827A\uFF0C\u5B57\u8282\u8DF3\u52A8\uFF0C\u4F18\u79C0\u6BD5\u4E1A\u751F</p></div><button class="fold" style="${ssrRenderStyle({ "display": "flex" })}" data-v-1a58729b> FOLD <img${ssrRenderAttr("src", _imports_8)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-1a58729b></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="welcome" data-v-1a58729b>Welcome to the Data Management &amp; Intelligence Group in Shenzhen University (SZU).</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1a58729b"]]);

export { wu as default };
//# sourceMappingURL=wu-EH0tGIL4.mjs.map
