<template>
  <div>
    <div id="routerGraph"></div>
  </div>
</template>

<script>
import * as d3 from "d3";
import { circlesData } from "@/views/D3/RouterGraph/demo";

export default {
  name: "router-graph",

  mounted() {
    this.drawGraph();
  },

  methods: {
    drawGraph: function() {
      let vm = this;
      const boxHeight = 400;
      const width = 1000;
      const svg = d3
        .select("#entranceGraph")
        .append("svg:svg")
        .attr("viewBox", [0, 0, width, boxHeight]);

      // Define the arrowhead marker variables
      const markerBoxWidth = 2;
      const markerBoxHeight = 2;
      const refX = markerBoxWidth / 1;
      const refY = markerBoxHeight / 1;
      const markerWidth = markerBoxWidth / 2;
      const arrowPoints = [
        [0, 0],
        [0, 2],
        [2, 1]
      ];

      const circleSize = 30;
      const circleBorderWidth = 6;
      const circlePadding = 14;
      const baseColor = "#0eca9a";

      const circles = circlesData[this.active];

      let defs = svg.append("defs");
      defs
        .append("marker")
        .attr("id", "arrow")
        .attr("viewBox", [0, 0, markerBoxWidth, markerBoxHeight])
        .attr("refX", refX - 2)
        .attr("refY", refY - 1)
        .attr("markerWidth", markerBoxWidth)
        .attr("markerHeight", markerBoxHeight)
        .attr("markerUnits", "strokeWidth")
        .attr("orient", "auto-start-reverse")
        .append("path")
        .attr("d", d3.line()(arrowPoints))
        .attr("fill", baseColor);

      // Add circles to the svg element
      circles.forEach((item, i) => {
        let iconPath;
        if (vm.auth) {
          iconPath = vm.authedAction(item.auth)
            ? item.icon_path
            : item.icon_path_2;
        } else {
          iconPath = item.icon_path;
        }
        defs
          .append("svg:pattern")
          .attr("id", "entrance_icon_" + i)
          .attr("width", 1)
          .attr("height", 1)
          .attr("patternUnits", "objectBoundingBox")
          .append("svg:image")
          .attr("xlink:href", iconPath)
          .attr("width", circleSize * 2 - circlePadding * 2)
          .attr("height", circleSize * 2 - circlePadding * 2)
          .attr("x", circlePadding)
          .attr("y", circlePadding);

        if (item.source && item.target) {
          let s, t;
          if (Array.isArray(item.source)) {
            s = item.source;
            t = item.target;
          } else {
            s = new Array(item.source);
            t = new Array(item.target);
          }
          for (let x = 0; x < s.length; x++) {
            let link = d3
              .linkHorizontal()
              .x(d => d.x)
              .y(d => d.y)({
              source: s[x],
              target: t[x]
            });
            svg
              .append("path")
              .attr("d", link)
              .attr("stroke-width", 20)
              .attr("marker-end", "url(#arrow)")
              .attr("stroke", baseColor)
              .attr("fill", "none");
          }
        }
      });
      const node = svg
        .selectAll("g")
        .data(circles)
        .join("g");
      node
        .append("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", d => d.r)
        .style("fill", (d, i) => {
          return "url(#entrance_icon_" + i + ")";
        })
        .style("stroke", baseColor)
        .style("stroke-width", circleBorderWidth)
        .style("padding", circlePadding)
        .style("cursor", "pointer")
        .on("click", evt => {
          if (evt.href) {
            vm.$router.push(evt.href);
          }
        });
      node
        .append("text")
        .text(d => d.title)
        .attr("dy", 20)
        .attr("x", d => d.x)
        .attr("y", d => d.y + d.r)
        .attr("fill", "#666")
        .style("font-size", 12)
        .style("text-anchor", "middle");

      return svg.node();
    }
  }
};
</script>

<style scoped></style>
