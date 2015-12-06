
// require("js/omv/WorkspaceManager.js")

OMV.WorkspaceManager.registerNodeOverride({
	del      : true,
    id       : "omvextrasorg",
    path     : "/system",
//    text     : _("OMV-Extras.org"),
//    icon16   : "images/plug.png",
//    iconSvg  : "images/plug.svg",
//    position : 95
});

OMV.WorkspaceManager.registerPanelOverride({
	newpath   : "/system/update",
    id        : "repos",
    path      : "/system/omvextrasorg",
//    text      : _("Repos"),
    position  : 50,
//    className : "OMV.module.admin.system.omvextrasorg.Repos"
});

OMV.WorkspaceManager.registerPanelOverride({
	newpath   : "/system/update",
    id        : "customrepos",
    path      : "/system/omvextrasorg",
//    text      : _("Custom Repos"),
    position  : 60,
//    className : "OMV.module.admin.system.omvextrasorg.CustomRepos"
});

OMV.WorkspaceManager.registerPanelOverride({
	newpath   : "/system/update",
    id        : "kernel",
    path      : "/system/omvextrasorg",
//    text      : _("Kernel"),
    position  : 70,
//    className : "OMV.module.admin.system.omvextrasorg.Kernel"
});

OMV.WorkspaceManager.registerPanelOverride({
	newpath   : "/storage/sharedfolder",
    id        : "resetperms",
    path      : "/privilege/sharedfolder",
//    text      : _("Reset Permissions"),
//    position  : 20,
//    className : "OMV.module.admin.privilege.sharedfolder.ResetPerms"
});

OMV.WorkspaceManager.registerPanel({
	newpath   : "/storage/sharedfolder",
    id        : "showsharedfolder",
    path      : "/privilege/sharedfolder",
//    text      : _("Shared Folder In Use"),
//    position  : 30,
//    className : "OMV.module.admin.privilege.sharedfolder.ShowSharedFolder"
});
