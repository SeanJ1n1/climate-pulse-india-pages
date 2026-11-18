# Methods and data

[Project overview](../README.md) · [Live dashboard](https://seanj1n1.github.io/climate-pulse-india-pages/#national-monitoring)

## How the heat shortlist is made

1. Apply the persistent-heat rule to each member of NOAA’s 31-member GEFS ensemble to locate the forecast heat footprint.
2. Compute district hazard probability as the share of members that meet the district heat-event threshold. Separately, intersect each member’s heat footprint with the WorldPop 2025 women aged 15–49 grid and average the exposed-population estimates across the ensemble.
3. Compare the two rankings among districts with both estimates. Sort each metric in descending order, break ties by district ID and take the first 25 under each ranking. The map keeps the full national roster, including districts with missing data.

For the 16 November 2026 heat outlook, **6 of 31** members meet the district threshold in Pune. The weather Top‑25 cut-off is **7 of 31**. Pune ranks **32nd** by hazard probability under the tie-break and **second** by estimated exposure among women aged 15–49 (about **520,000**). The member share counts district-level threshold exceedances. The population estimate also includes localized footprint exposure in members where less of the district is affected.

The pregnancy proxy uses the same heat footprint and WorldPop’s annual estimated pregnancies from **2015**. It is an indicative historical exposure measure. Current pregnancies and patient-level exposure are unavailable.

## Inspect the published data

| Input | Public source |
| --- | --- |
| Forecasts, 16 November 2026 | [14-day district snapshot](../IND-2026-11-16.json) |
| Forecasts, 11 November 2026 | [28-day lead district snapshot](../archive-IND-2026-11-11-lead28.json) |
| 2015 pregnancy proxy within forecast heat footprints | [14-day window](../maternal-IND-2026-11-16-14d.json) · [28-day lead target week](../maternal-IND-2026-11-11-28d.json) |
| Forecast and observations | [NOAA GEFS](https://www.nco.ncep.noaa.gov/pmb/products/gens/) · [NOAA CPC global daily temperature](https://psl.noaa.gov/data/gridded/data.cpc.globaltemp.html) |
| Population | [WorldPop 2025 age and sex](https://hub.worldpop.org/geodata/summary?id=97055) · [WorldPop 2015 estimated pregnancies](https://hub.worldpop.org/geodata/summary?id=1029) |
| District geometry and background map | [geoBoundaries](https://www.geoboundaries.org/) · [UN Clear Map](https://geoservices.un.org/arcgis/rest/services/ClearMap_WebTopo/MapServer) |

Forecast JSON uses a shared `fields` array and one array of rows for each hazard and lead under `scenarios`. The issued time and exact target dates are recorded in `cp_issue`, `cp_start` and `cp_end`. For the paired Pune comparison, use `scenarios["heat-14"]` in the 16 November snapshot. The metrics are `cp_hazard_pct` and `cp_women`. Keep rows with both values, sort as described above and take the first 25. A null value means No Data. The deployed layers follow the original data and source licenses.

## 2025 retrospective evaluation

The 2025 experiment used archived forecasts with an observed-weather reference from NOAA CPC and WorldPop. The target at a 14-day lead was a **seven-day target week beginning 14 days after issue**. The live 16 November 2026 14-day demonstration covers a **continuous window beginning at issue**. The 2025 metrics refer to all exposed residents.

Persistent heat, 14-day lead, 15 held-out issues and 10,500 district-weeks:

| Forecast correction | MAE (people per district-week) |
| --- | ---: |
| Conventional | 49,512 |
| Direct PDFM augmentation | 46,274 |
| Climate-conditioned PDFM | 47,244 |

In the separate fixed-budget test, the climate-conditioned model’s Top 50 captured **21.03%** of the reference exposure and hit **36** observed district-week heat events. Conventional correction captured **18.05%** and hit **30**. Across all six hazard and lead settings, climate-conditioned correction had lower MAE than conventional correction in **four**. See the corresponding data and figures in [Historical & Evaluation](https://seanj1n1.github.io/climate-pulse-india-pages/#historical-evaluation).

Google PDFM supplies representations for the retrospective correction experiment. Access to the raw embeddings is governed by the applicable terms. [Google Research PDFM paper](https://arxiv.org/abs/2411.07207)

## Field verification and limits

- Public National Monitoring and Historical & Evaluation can be opened without an ArcGIS account. For connected Android reporting and reviewer access to Field Reports, use an authorized ArcGIS account.
- The Pune example illustrates how a shortlist can guide service checks. The tested workflow used a sample report. Clinic readiness and maternal-health outcomes require local verification. [India Ministry of Health & Family Welfare and UNFPA India guidance](https://india.unfpa.org/en/publications/heat-and-pregnancy-guidance-healthcare-providers-and-community-health-workers) · [WHO heat and maternal health indicators](https://www.who.int/publications/i/item/9789240125063)
- The live November forecast uses NOAA GEFS and WorldPop. The independently verified displacement outcomes needed to evaluate precision, recall or lead time are unavailable. The dashboard keeps Unknown separate from observed events or absences.
